require 'uri'

module RedirectPatch
  def redirect_to(options = {}, response_status = {})
    if options.is_a?(String)
      super(options + '?containerPort=3000&languageName=rails5&locale=en', response_status)
    else
      super(options, response_status)
    end
  end
end

module ControllerGeneratorPatch
  # NOTE:
  # add_routesメソッド内部の変更はないがこれもパッチに含ませておかないと、
  # indentメソッドの第二引数が無視されてgenerate_routing_codeが実行されてしまう
  def add_routes
    unless options[:skip_routes]
      actions.reverse_each do |action|
        # route prepends two spaces onto the front of the string that is passed, this corrects that.
        route indent(generate_routing_code(action), 2)[2..-1]
      end
    end
  end

  private

    def generate_routing_code(action)
      depth = 0
      lines = []

      regular_class_path.each do |ns|
        lines << indent("namespace :#{ns} do\n", depth * 2)
        depth += 1
      end

      # NOTE: 変更箇所
      # https://github.com/rails/rails/blob/master/railties/lib/rails/generators/rails/controller/controller_generator.rb#L50
      lines << indent(%{get "#{file_name}/#{action}" => "#{file_name}\##{action}"\n}, depth * 2)

      until depth.zero?
        depth -= 1
        lines << indent("end\n", depth * 2)
      end

      lines.join
    end
end

module ActionView::Helpers::AssetTagHelper
  def stylesheet_link_tag(*sources)
    options = sources.extract_options!.stringify_keys
    path_options = options.extract!('protocol').symbolize_keys

    sources.uniq.map { |source|
      uri = URI.parse(source)
      uri.query = [uri.query, 'containerPort=3000', 'languageName=rails5', 'locale=en'].compact.join('&')
      tag_options = {
        "rel" => "stylesheet",
        "media" => "screen",
        "href" => uri,
      }.merge!(options)
      tag(:link, tag_options, false, false)
    }.join("\n").html_safe
  end
end

class ActionController::Base
  prepend RedirectPatch
end

# NOTE:
# NamedBaseがuninitialized constantエラーが発生してしまい、
# NamedBaseのみのrequireでは依存モジュールのLoadErrorが発生するため、
# NamedBaseと関連モジュールを含むgenerators自体をrequire
require 'rails/generators'
module Rails
  module Generators
    class ControllerGenerator < NamedBase
      prepend ControllerGeneratorPatch
    end
  end
end

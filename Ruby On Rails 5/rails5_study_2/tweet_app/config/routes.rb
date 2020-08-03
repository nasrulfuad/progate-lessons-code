Rails.application.routes.draw do
  get "posts/index" => "posts#index"

  get "/" => "home#top"
  get "about" => "home#about"
end

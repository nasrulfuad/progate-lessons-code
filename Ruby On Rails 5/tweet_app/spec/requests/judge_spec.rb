require 'rails_helper'

RSpec.describe 'make password digest column', type: :request do
  let(:user) { User.create(name: 'Ken', email: 'ken@progate.com', password: 'kentheninja') }
  let(:user_params) { { name: 'Master White', email: 'master@progate.com', password: 'masterwhite' } }

  it '@@@The password_digest column of the users table is not set properly. If the column was named incorrectly, use the Reset button to undo all changes.@@@' do
    expect(user.password_digest).not_to be_nil
  end

  it '@@@The password_digest column of the users table should be an string type. Press the Reset button to undo changes and make the column again, if necessary.@@@' do
    User.create(user_params)
    expect(User.last.password_digest.is_a?(String)).to eq(true)
  end
end

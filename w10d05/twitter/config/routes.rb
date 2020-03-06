Rails.application.routes.draw do

  # prefix all this stuff with the api
  # |
  # |
  #\/
  scope :api do
    resources :posts
    resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

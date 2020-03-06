Rails.application.routes.draw do

  scope :api do
    resources :users, except: [:create]
    resources :posts
    post 'register', to: 'authentications#register' # run the authenticatin controller and then run the register
    post 'login', to: 'authentications#login' # run the authenticatin controller and then run the login
    post 'oauth/github', to: 'oauth#github'
  end
end

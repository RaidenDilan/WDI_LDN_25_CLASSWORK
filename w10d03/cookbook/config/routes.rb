Rails.application.routes.draw do
  root 'static#home'

  get '/about', to: 'static#about'

  resources :recipes
  resources :categories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

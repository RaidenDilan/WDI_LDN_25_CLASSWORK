Rails.application.routes.draw do
  scope :api do
    resources :cities
    get 'flights', to: 'skyscanner#flights'
  end
end

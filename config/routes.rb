Rails.application.routes.draw do
  resources :follows
  resources :likes, only: [:create, :destroy]
  resources :comments
  resources :jeans
  resources :users

  post "/signup", to: "users#create"
  get "/user", to: "users#user"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

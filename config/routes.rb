Rails.application.routes.draw do
  resources :follows
  resources :likes, only: [:create, :destroy]
  resources :comments
  resources :jeans
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  # Defines the root path route ("/")
  # root "articles#index"
end

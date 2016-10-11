Rails.application.routes.draw do
  get "about", to: "about#index"
  get "gallery", to: "gallery#index"
  get "news", to: "news#index"

  root "home#index"
end

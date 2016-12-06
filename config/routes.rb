Rails.application.routes.draw do
  #static pages via high_voltage

  resources :donations, only: [:new, :create]
end

# frozen_string_literal: true

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'root#index'
  get '/api/messages', to: 'root#greeting'
end

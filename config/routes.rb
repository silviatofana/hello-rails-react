# frozen_string_literal: true

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do

  root 'greetings#index'
    
    namespace :api do
      namespace :v1 do
        resources :greetings, only: [:index]
      end
    end

  end

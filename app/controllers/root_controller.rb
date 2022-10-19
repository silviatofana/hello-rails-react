# frozen_string_literal: true

class RootController < ApplicationController
  def index; end
  def greeting
    greeting = Greeting.all.sample.message
    render json: greeting
  end
end

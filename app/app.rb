

require 'sinatra/base'
require_relative'./models/thermostat_details.rb'
require 'pry'

class Thermostat < Sinatra::Base


  get '/' do
    'Hello Thermostat!'
  end

  post '/city' do
    thermostat = Thermostat.create(city: params[:city])
    binding.pry
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end

require 'date'

class SkyscannerController < ApplicationController

  def flights
    tomorrow = Date.today + 1
    base_url = 'http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/UK/GBP/en-GB/LON/'


    response = HTTParty.get("#{base_url}#{params[:destination]}/#{tomorrow}", {
      query: {
        apiKey: ENV["SKYSCANNER_API_KEY"],
      },
      headers: { 'Accept' => 'application/json' }
    })

    p response

    render json: response, status: :ok
  end
end

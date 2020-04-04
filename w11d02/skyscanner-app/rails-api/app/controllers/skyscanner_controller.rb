require 'date' # Can use new Date() to get flights

class SkyscannerController < ApplicationController
  def flights
    # outbound = params[:outboundpartialdate].split('T').first
    # inbound  = params[:inboundpartialdate].split('T').first
    # outbound = params[:outboundpartialdate]
    # inbound  = params[:inboundpartialdate]

    # country     = params[:country]
    # locale      = params[:locale]
    # currency    = params[:currency]
    # origin      = params[:origin]
    # destination = params[:destination]

    country  = "UK"
    locale   = "en-GB"
    currency = "GBP"
    tomorrow = Date.today + 1
    base_url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/#{country}/#{currency}/#{locale}/"
    response = HTTParty.get("#{base_url}#{params[:destination]}/#{tomorrow}", {
    # response = HTTParty.get("#{base_url}#{params[:origin]}/#{params[:destination]}/#{params[:outboundpartialdate]}/#{params[:inboundpartialdate]}/", {
      headers: {
        'Accept' => 'application/json',
        'X-RapidAPI-Key' => ENV['RAPIDAPI_API_KEY']
      }
    })

    p "response --------------------->", response

    render json: response, status: :ok
  end
end


# class SkyscannerController < ApplicationController
#
#   def flights
#     tomorrow = Date.today + 1
#     base_url = 'http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/UK/GBP/en-GB/LON/'
#
#     response = HTTParty.get("#{base_url}#{params[:destination]}/#{tomorrow}", {
#       query: {
#         apiKey: ENV["SKYSCANNER_API_KEY"],
#       },
#       headers: { 'Accept' => 'application/json' }
#     })
#
#     # p response
#
#     render json: response, status: :ok
#   end
# end

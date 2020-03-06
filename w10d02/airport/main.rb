# require our files
require_relative "airport"
require_relative "flight"
require_relative "passenger"

@airport = Airport.new "London Heathrow"

def list_flights(airport)
  airport.flights.each_with_index do | flight, index |
    puts "#{index}.\t#{flight}" # \t means TAB
  end
end

def list_passengers(flight)
  flight.passengers.each_with_index do | passenger, index |
    puts "#{index}.\t#{passenger.name}"
  end
end

def menu
  puts `clear` # clear our terminal when this run
  puts "*** ✈️  Welcome to #{@airport.name} ✈️  ***\n\n"  # \n\n is like <br> a line breaks
  puts "1 : Add a flight"
  puts "2 : List flights"
  puts "3 : Add passenger to flight"
  puts "4 : List passengers of a flight"
  puts "Q : Quit\n\n"
  print "--> "
  gets.chomp # hangs here until user inputs something
end

# this is a variable to run the menu task. # response is what you wanna call it, it could be user_input or whatever you call it.
response = menu
# p response

while response.upcase != "Q" # != does not equal to "Q" accept lower case or upper case
  case response
  when "1" # Add a flight
    puts "How many seats are on this flight?"
    number_of_seats = gets.to_i # gets our input from the number_of_seats
    puts "What is the flight's destination?"
    destination = gets.chomp

    flight = Flight.new number_of_seats, destination # In this order because in the flights file we've called them in that order.
    puts @airport.add_flight flight # flight is the above we just created
    gets # prints our input in a Flight object

  when "2" # List flights
    puts "Here is a list of the flights"
    list_flights @airport # call the instance of the @airport
    gets
  when "3" # Add passenger to flight
    puts "What is the passenger's name?"
    name = gets.chomp # .chomp removes trailing new line character i.e. '\n' from the the string
    passenger = Passenger.new name # making a new passenger and passing in their name

    puts "What flight do you want to add a passenger to?"
    list_flights @airport # list the flight from this airport
    flight_number = gets.to_i # take the users input
    flight = @airport.flights[flight_number] # store our flight number into our array of flights
    flight.add_passenger passenger # pass in our passenger into our add_passenger class
    puts "#{passenger.name} added to #{flight}"
    gets

  when "4" # List passengers to flights
    puts "What flight do you want to list the passengers of?"
    list_flights @airport # list the flight from this airport
    flight_number = gets.to_i # take the users input
    flight = @airport.flights[flight_number] # pass in the flight_number
    puts "The passenger list for this flight is:"
    list_passengers flight # list the passengers of this flight
    gets
  end

  response = menu
end

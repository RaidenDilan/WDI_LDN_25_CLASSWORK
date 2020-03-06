class Flight
  attr_reader :number_of_seats
  attr_accessor :passengers, :destination

  def initialize(number_of_seats, destination)
    @number_of_seats = number_of_seats
    @destination = destination
    @passengers = []
  end

  def add_passenger(passenger)
    passengers << passenger # shove our passenger into our passengers array
  end

  def to_s # to_s means to_string
    "#{destination} with #{number_of_seats} passengers." # we are overrriding the built-in Ruby printing
  end
end

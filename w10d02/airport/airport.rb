class Airport
  attr_reader :name
  attr_accessor :flights

  def initialize(name)
    @name = name
    @flights = []
  end

  def add_flight(flight)
    flights << flight # flight (single flight) is what we send to the flight(s) array
  end
end

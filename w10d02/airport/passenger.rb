class Passenger
  # Creates instance variables and corresponding methods that return the value of each instance variable.
  # Equivalent to calling “attr:name” on each name in turn. String arguments are converted to symbols.
  # - args => :name
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

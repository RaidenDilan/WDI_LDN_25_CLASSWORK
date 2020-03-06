require "date" # require our date

class Person
  # when do you need a writer and not need a reader? For passwords LOL
  attr_reader :name # get these methods
  attr_accessor :age # this is a reader and a writer
  # attr_writer :name
  DEFAULT_NUMBER_OF_LEGS = 2 # setting a constant to the class

  @@count = 0 # counting the instances

  # An innitialize function or method
  # Is a special word. it is an instance method. when you do new a new instance of a person is crated and instantly add a name
  # Class variables are prefixed with two @ characters (@@).
  def initialize(name, dob)
    @name = name #@name referes to the instance
    @@count += 1
    @dob = dob
    # puts "Number of Legs #{DEFAULT_NUMBER_OF_LEGS}"
  end

  def self.count
    @@count
  end

  def self.total_legs
    @@count * DEFAULT_NUMBER_OF_LEGS
  end

  def set_name(name)
    puts "Setting person's name..."
    @name = name
  end

  def get_name
    puts "Returning person's name..."
    @name
  end

  def name
    @name
  end

  def update_name=(name)
    @name = name
  end

  def set_age(age)
    @age = age
  end

  def age
    @age
  end

  def age=(age)
    @age = age
  end

  def talk(words) # talk method
    puts "I say, #{words}"
  end
end

# bob = Person.new
# bob.set_name "Bob"
# puts bob.get_name
#
# # ---> You can think of .new as a sort of alias for .initialize.
# luca = Person.new "Luca"
# puts luca.get_name
#
# # ---> REFACTOR get_name
# rawand = Person.new "Rawand"
# puts "Person's name is #{rawand.name}"
#
# # ---> Both setter methods and initialize
# rawand.set_age 27
# puts "#{rawand.name}'s age is #{rawand.age}"
#
# # ---> Ruby allows us to do something really cool though as it allows methods to be defined with certain special characters, like =.
# rawand.age=(25)
# rawand.age = 28 # Syntactic Sugar
#
# # ---> Class methods
# puts Person.count
# Person.new "Dave"
# puts Person.count
#
# # ---> Class Constants
# puts Person::DEFAULT_NUMBER_OF_LEGS # NUMBER OF LEGS 'OF' THIS PERSON

class Student < Person
  attr_reader :courses

  def initialize(name, dob)
    # we can use the super method, which calls the equivalent named function (initialize) from
    # the parent class (Person). That saves us from having to write out the same functionality twice.
    super(name, dob) # run the same function in person
    @courses = []
  end

  def get_courses
    puts @courses
  end

  def add_course(course)
    raise "Invalid course" unless ['JS', 'Ruby'].include?(course) # add the course that's not already in the array
    @courses << course
  end
end

raiden = Person.new "Raiden", Date.new(1993, 8, 1)
iris = Student.new "Iris", Date.new(1994, 1, 8)

iris.add_course "Ruby"
iris.add_course "JS"
# iris.add_course "React" // INVALID COURSE BECAUSE 'REACT' DOESN'T EXIST
iris.get_courses

raiden.talk "I love Ruby"
p Person.count

ray = Person.new "Ray", Date.new(1990, 10, 10)
Person.new "Dom", Date.new(1993, 10, 10)
Person.new "Joe", Date.new(1994, 10, 10)
Person.new "Jack", Date.new(1992, 10, 10)
puts Person.count # this equals to 4 person

puts Person.total_legs

puts ray.class

ray.talk "I am ray, of Person class"
ray.set_name "Rayy"
puts ray.get_name

ray.update_name = "Ray!!!" # A setta method .name
puts "Person's name is #{ray.name}"
puts ray.name

ray.update_name = "Julian"
puts ray.name
puts ray.age = Date.new(1981, 01, 06)

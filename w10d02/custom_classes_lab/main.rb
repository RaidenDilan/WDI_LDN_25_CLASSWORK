require "date"

class Student
  attr_reader :courses, :name, :school, :enrollment_date, :graduation_date

  def initialize(name, school, enrollment_date)
    raise "invlaid date" unless enrollment_date.is_a? Date

    @name = name
    @courses = []
    @school = school
    @enrollment_date = enrollment_date
    @graduation_date = enrollment_date + 12 * 7
  end

  def add_course(course_name)
    raise "Invalid course" unless ['JS', 'Ruby'].include?(course_name) # add the course that's not alrady in the array
    @courses << course_name
  end
end

adrian = Student.new "Adrian", "GA", Date.new(2017, 4, 4)

p adrian.add_course "JS"
p adrian

class Vehicle
  attr_reader :license_plate, :manufacture_date
  attr_accessor :color, :owner, :sale_price

  def initialize(license_plate, manufacture_date, color, sale_price)
    raise "Invalid Manufacture Date" unless

    @license_plate = license_plate
    @manufacture_date = manufacture_date
    @color = color
    @owner = owner
    @sale_price = sale_price
  end

  def color
    @color = color
  end

  adrian = Vehicle.new "LR09 EJO", "Red", "195", Date.new(2009, 1, 2)
  p adrian.color "red"
end

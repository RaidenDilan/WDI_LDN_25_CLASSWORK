# DEFINITION
def say_hi(name="Alex")
  "Hi #{name}"
end

# user = gets.chomp
# puts say_hi(user)

puts say_hi

def say_hey(name="Raiden")
  "Hey #{name}!"
end

# NO NEED TO INVOKE ()
puts say_hey

# THIS IS A SPLAT
def say_hello(*names)
  puts "Hello, #{names.join(', ')}"
end

puts say_hello("Alex", "Rane", "Mike", "Gerry")

# - * - is a splat
# SPLAT SPUNGING LOL
def mixed_args(a, b, * c, d)
  puts "Arguements:"
  p a, b, c, d
end

mixed_args(1, 2, 3, 4, 5, 6, 7, 8)

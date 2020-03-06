puts "hello" if true

# 1
if true
  puts "hello"
else
  puts "bye"
end

# 2
if true then puts "hello" else puts "bye" end

# 3
if true; puts "hello"; else; puts "bye"; end

puts "enter an integer: "
n = gets.to_i

# 4
if n > 0
  puts "Number is positive"
elsif n < 0
  puts "Number is negative"
else
  puts "Your number is zero"
end

# 5
unless n > 10
  puts "Too small..."
else
  puts "LARGE number"
end

# 6
puts "enter an integer: "

n = gets.to_i

case true
when n > 0
  puts "Number is positive"
when n < 0
  puts "Number is negative"
else
  puts "Your number is zero"
end

# 7
n = 1
while n < 11
  puts n
  n += 1
end

puts "Done!"

# 8
n = 1
until n > 10
  puts n
  n += 1
end

puts "Done!!"

# 9
for i in 1..10
  puts i
end

# 10
for i in 0..5
  break if i > 2
  puts "The number is #{i}"
end

# 11
n = 1
while n < 1000
  n += 1
  puts n
  next unless n == 10
  break
end

# 12
puts "Guess my number"
  answer = gets.to_f # answer = gets.to_i
if answer > 10
  puts "Too high man"
elsif answer < 10
  puts "Too low dude"
else
  puts "Correct"
end

# 13
number = 6
puts "Guess the number I'm thinking of (1-10)?"
answer = gets.to_i

until answer == number
  case true
    when answer > number
      puts "Too high, guess again"
      answer = gets.to_i
  else
    puts "Too low, guess again"
    answer = gets.to_i
  end
end

puts "You nailed it"

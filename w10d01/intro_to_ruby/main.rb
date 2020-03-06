# print 3 + 2
# puts 3 + 2
# p 3 + 2
# pp 3 + 2

puts "What is your favorite color?"

# "gets" a line of text, including a line break at the end
# "gets" returns that line of text as a string value.
# Calling "chomp" on that value removes the line break

answer = gets.chomp

puts "You said #{answer}"

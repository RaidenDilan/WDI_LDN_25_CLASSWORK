l = ["8th", "6th", "Union Square", "3rd", "1st"]

m = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

puts "What line are you on?"
  current_line = gets.to_str
puts "Which station are you on?", current_line
  current_stop = gets.to_str
puts "Which station do you want to get to?", current_stop
  destination = gets.to_str
puts "You have #{stops} many stops left", destination

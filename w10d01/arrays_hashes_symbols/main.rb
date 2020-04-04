N   = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
L   = ["8th", "6th", "Union Square", "3rd", "1st"]
SIX = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

# puts N.map { |stop| puts N.index('8th') }
# N.map { |num| puts "<--- MAP --->", num.to_s }
# N.index { |x| puts "<--- MAP --->", ['Union Square'].include?(x) }
# N.index { |x| puts "<--- MAP --->", ['8th'].index(x) }

print "What line are you on? -> "
current_line = gets.chomp

print "Which station are you on? -> "
current_stop = gets.chomp

print "Which station do you want to get to? -> "
destination = gets.chomp

# stop = current_line.map { |stop| puts "Stop : #{stop}" }
# puts "stop ------", stop

print "You have #{stops} stops left until you've arrived at your destination."

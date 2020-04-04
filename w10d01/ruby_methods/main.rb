# { THIS PART IS A BLOCK }
# 10.times { puts "Hello" }

# another method
3.times do
  puts "Hello"
end

# another method
4.times do |n|
  puts "The number is #{n}"
end

# another method to arrays
# - %w - turn (whatever) into an [array]
names = %w(Fred Wilma Barney Betty)

for i in 0..names.size
  puts 'names[i] --->', names[i]
end

names.each { |name| puts name }

names.each do |name|
  puts 'name --->', name
end

hash = { foo: 1, bar: 2 }
hash.each { |key, value| puts "key was #{key}, value was #{value}" }

arr = []

(1..10).each { |i| arr << i if i.odd? }
print 'arr --->', arr

# showing the names with their index
names = %w(Fred Wilma Barney Betty)

names.each_with_index do |name, index|
  puts "#{index}, #{name}"
end

numbers = (1..10).to_a
p 'numbers --->', numbers

numbers_as_strings = numbers.map { |num| num.to_s }
p 'numbers_as_strings  --->', numbers_as_strings

# .map has an alias called collection
names = %w(Fred Wilma Barney Betty)

#
reversed_names = names.map { |name| name.reverse }
p 'reversed_names --->', reversed_names

# sum will be the total and then n will be the number 5,6,7,8,9,10...
answer = (5..10).reduce { |sum, n| sum + n }
p 'answer 1 --->', answer

# another method to above
answer = (5..10).reduce(:+)
p 'answer 2 --->', answer

answer = (5..10).reduce(1) { |product, n| product * n }
answer = (5..10).reduce { |product, n| product * n }
p 'answer 3 --->', answer

# finding the longest word
names = %w(Fred Wilma Barney Betty)

longest = names.reduce do |memo, word|
  memo.length > word.length ? memo : word
end

p 'longest --->', longest

answer = (1..10).select { |i| i.odd? }
p 'answer 4 --->', answer

answer = (1..10).find_all { |i| i.even? }
p 'answer 5 --->', answer

answer = [2,3,4,5,8].any? { |i| i % 2 == 0 }
p 'answer 6 --->', answer

answer = [2,3,4,5,8].all? { |i| i % 2 == 0 }
p 'answer 7 --->', answer

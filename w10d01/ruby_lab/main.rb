# STRINGS
puts 'World'.end_with? 'd'
puts 'Yellow'.insert(3, 'X')
puts 'Goodbye'.split(//).last(3).to_s
puts 'Goodbye'.split(//).last(3).join
puts 'Goodbye'.split(//).last(3).join('')
puts 'Goodbye'.split(//).last(3).join('').to_s
puts 'Goodbye'[-3..-1] || 'Goodbye'
puts 'Goodbye'.slice('bye')
puts 'shout'.upcase

# ARRAYS
puts [1, 2, 3, 4].insert(2, 'orange')
puts ['mike', 'emily', 'will', 'ajay'].clear
puts [].empty?
puts ['small', 'medium', 'large'].join('-')
puts ['small', 'medium', 'large'].reverse
puts [1, 2, 3, 4, 5].shuffle

# HASHES
hash_one = { 'mike' => 'hayden', 'emily' => 'isacke' }.key?('mike')
hash_two = { 'mike' => 'hayden', 'emily' => 'isacke' }.key?('will')||('You\'re shit outta luck!')
hash_three = { 'mike' => 'hayden', 'emily' => 'isacke' }.fetch('will', 'You\'re out of luck')
hash_four = { 'mike' => 'hayden', 'emily' => 'isacke' }.length
hash_five = { 'mike' => 'hayden', 'emily' => 'isacke' }.keys
hash_six = { 'mike' => 'hayden', 'emily' => 'isacke' }.keys.length
hash_seven = { 'mike' => 'hayden', 'emily' => 'isacke' }.size
hash_eight = { 'mike' => 'hayden', 'emily' => 'isacke' }.count

puts hash_one
puts hash_two
puts hash_three
puts hash_four
puts hash_five
puts hash_six
puts hash_seven
puts hash_eight

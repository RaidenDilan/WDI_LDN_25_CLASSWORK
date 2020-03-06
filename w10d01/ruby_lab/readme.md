![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Ruby Methods Lab

### Introduction

Your task is to practise using the in built methods that exist on [strings](https://ruby-doc.org/core-2.2.0/String.html), [arrays](https://ruby-doc.org/core-2.2.0/Array.html) and [hashes](https://ruby-doc.org/core-2.2.0/Hash.html) in Ruby. The table below gives you the starting point and the finishing point, and you should use Google and the Ruby documenation to find which methods to use.

> **Note:** You should write down the answers to the problems in Atom.

### Strings

No. | Task | Object | Response
--- | --- | --- | ---
1. | Check if the string "world" ends with the letter "d" | `"world"` | `true`
2. | Insert the letter "X" into the string "yellow", between the two "l"s | `"yellow"` | `"yelXlow"`
3. | Return the last three letters of "goodbye" as a string | `"goodbye"` | `"bye"`
4. | Make all of the letters in "shout" upper case | `"shout"` | `"SHOUT"`

### Arrays

No. | Task | Object | Response
--- | --- | --- | ---
5. | Add the string "orange" to the array, after the number 2 | `[1, 2, 3, 4]` | `[1, 2, "orange", 3, 4]`
6. | Remove everything from the array | `["mike", "emily", "will", "ajay"]` | `[]`
7. | Check if an array is empty | `[]` | `true`
8. | Join the array of strings together with hyphens | `["small", "medium", "large"]` | `"small-medium-large"`
9. | Reverse the order of the array | `["small", "medium", "large"]` | `["large", "medium", "small"]`
10. | Return the array with the contents in a random order | `[1, 2, 3, 4, 5]` | `[2, 5, 1, 3, 4]`

### Hashes

No. | Task | Object | Response
--- | --- | --- | ---
11. | Check if hash contains the key `"mike"` | `{ "mike" => "hayden", "emily" => "isacke" }` | `true`
12. | Search for a key of `"will"`, and get a default response back if not found | `{ "mike" => "hayden", "emily" => "isacke" }` | `"you're outta luck!"`
13. | Return the number of key/value pairs in the hash | `{ "mike" => "hayden", "emily" => "isacke" }` | `2`
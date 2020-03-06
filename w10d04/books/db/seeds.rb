[Book, Author].each do |model|
  ActiveRecord::Base.connection.execute("TRUNCATE #{model.table_name} RESTART IDENTITY CASCADE")
end

[{
  first_name: "J. R. R.",
  last_name: "Tolkien"
}, {
  first_name: "Haruki",
  last_name: "Murakami"
}].each do |author|
  Author.create!(author)
end

[{
  title: "The Hobbit",
  image: "http://i.imgur.com/74AjgLz.jpg",
  price: 10,
  isbn: "9780582186552"
}, {
  title: "The Fellowship of the Ring",
  image: "http://i.imgur.com/xQROZfX.jpg",
  price: 11,
  isbn: "6568902938499"
}, {
  title: "The Two Towers",
  image: "http://i.imgur.com/TbUJfKI.jpg",
  price: 9,
  isbn: "3453452342343"
}, {
  title: "Return of the King",
  image: "http://i.imgur.com/YxwTXno.jpg",
  price: 12,
  isbn: "5843923840938"
}, {
  title: "Wind-up Bird Chronicles",
  image: "http://i.imgur.com/jqmYb81.jpg",
  price: 13,
  isbn: "6659032894939"
}, {
  title: "1Q84 - Book Three",
  image: "http://i.imgur.com/Upxt9Go.jpg",
  price: 10,
  isbn: "4565423423545"
}, {
  title: "1Q84 - Books One & Two",
  image: "http://i.imgur.com/sQYMxsp.jpg",
  price: 10,
  isbn: "4293849823759"
}, {
  title: "Norwegian Wood",
  image: "http://i.imgur.com/CKJNnvu.jpg",
  price: 7,
  isbn: "4365984935804"
}].each do |book|
  Book.create!(book)
end

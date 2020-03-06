[Artist, Album, Genre].each do |model|
  ActiveRecord::Base.connection.execute("TRUNCATE #{model.table_name} RESTART IDENTITY CASCADE")
end

[{
  name: "The Beatles",
  photo: "http://www.billboard.com/files/styles/article_main_image/public/media/the-beatles-circa-1966-650-430.jpg",
  nationality: "British"
}, {
  name: "Snoop Dog",
  photo: "http://trace.tv/wp-content/uploads/2015/06/snoop-dogg.jpg",
  nationality: "American"
}].each do |artist|
  Artist.create!(artist)
end

[{
  title: "Tha Doggfather",
  photo: "https://s3.amazonaws.com/rapgenius/1366744664_tha-doggfather-5048f1c320e29.jpg",
  release_date: Date.new(1996, 11, 12),
  price: 10.99,
  artist_id: 2
}, {
  title: "Da Game Is to Be Sold, Not to Be Told",
  photo: "https://upload.wikimedia.org/wikipedia/pt/0/0c/Snoop_Dogg_-_Da_Game_Is_to_Be_Sold,_Not_to_Be_Told.jpg",
  release_date: Date.new(1998, 8, 4),
  price: 11.99,
  artist_id: 2
}, {
  title: "No Limit Top Dogg",
  photo: "http://cps-static.rovicorp.com/3/JPG_400/MI0001/387/MI0001387813.jpg?partner=allrovi.com",
  release_date: Date.new(1999, 5, 11),
  price: 12.99,
  artist_id: 2
}, {
  title: "Please Please Me",
  photo: "https://upload.wikimedia.org/wikipedia/en/a/a4/PleasePleaseMe.jpg",
  release_date: Date.new(1963, 3, 22),
  price: 9.99,
  artist_id: 1
}, {
  title: "A Hard Day's Night",
  photo: "https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg",
  release_date: Date.new(1964, 6, 26),
  price: 10.99,
  artist_id: 1
}].each do |album|
  Album.create!(album)
end

[{ name: "HipHop" }, { name: "Rock" }].each do |genre|
  Genre.create!(genre)
end

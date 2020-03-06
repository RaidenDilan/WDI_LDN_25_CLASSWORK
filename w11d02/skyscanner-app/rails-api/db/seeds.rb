[City].each do |model|
  ActiveRecord::Base.connection.execute("TRUNCATE #{model.table_name} RESTART IDENTITY CASCADE")
end

[{
  name: 'San Francisco',
  country: 'United States of America',
  airport: 'SFO'
},{
  name: 'Hong Kong',
  country: 'Hong Kong',
  airport: 'HKG'
},{
  name: 'Kuala Lumpur',
  country: 'Malaysia',
  airport: 'KUL'
},{
  name: 'Sydney',
  country: 'Australia',
  airport: 'SYD'
},{
  name: 'New York',
  country: 'United States of America',
  airport: 'JFK'
},{
  name: 'Paris',
  country: 'France',
  airport: 'CDG'
}].each do |city|
  City.create!(city)
end

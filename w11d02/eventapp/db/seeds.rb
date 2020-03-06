user = User.create!(
  username: 'raidendilan',
  email: 'raiden@me.com'
  )

Event.create!(
  name: ' WDI25 Grad Ball',
  date: Date.new(2017, 4, 28),
  location: 'Black Horse, Leman Street, London',
  user: user
  )

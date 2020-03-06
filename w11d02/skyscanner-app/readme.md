![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Rails API Proxy Requests

### Introduction

Your task is to use the Rails API to make a proxy request to the Skyscanner API in order to get quote information about flights.

The `starter-code` contains an Angular app with the same Skyscanner setup as we used in the previous module. There is also a Rails API that has a 'cities' resource with full CRUD actions.

> **Note:** You can use the same Skyscanner API key that you generated in the last module.

Inside the Angular directory run the following in the terminal:

```sh
yarn install
gulp
```

Inside the Rails directory run the following in the terminal:

```sh
bundle rails db:create db:migrate db:seed
rails s
```

**Before you start**, make a request to `http://localhost:3000/api/cities` and you should get back the seeded cities as JSON.

### Tasks

* Create a Rails controller called `skyscanner`, that has a method called `flights`.
* Update `config/routes` so that your Rails API can handle a `GET` request to `/api/flights`, which will run the `flights` method inside the `skyscanner` controller.
* Use **HTTParty** to make a proxy request to the Skyscanner API.
* Send response from the Skyscanner API back as JSON, for the Angular app to consume.

**Important:** At this point you should test your new `/api/flights` route in Insomnia, and check that you are getting back the flight data.

* Once you are happy that you can make requests to your API for flight data, uncomment `getFlights()` inside the `CitiesIndexCtrl` and the `CitiesShowCtrl`, and you should see the flight data displaying on the page.

> **Note:** This is the only change you need to make to the Angular app.

### Tips

1. HTTParty **won't** give you back a `parsed_response` when you make a request to Skyscanner (like it did with Github).

2. Use the solution code from the Express version of this app to construct your HTTParty request. You can find this inside the `solutions` folder in the lesson notes repo.

3. We want to find flights for tomorrow's date. Instead of hardcoding it, you can calculate tomorrow's date using Ruby by first of all requiring the date library, and then using `Date.today`.

```ruby
require 'date'

tomorrow = Date.today + 1
```

✈️

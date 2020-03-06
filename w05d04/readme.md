![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## TFL Bikes Express App

#### Introduction

Your task is to create an Express App, that renders all of the TFL Bike Points on a Google Map.

#### Tasks

##### Google Maps & Markers

* Use `hadouken` to create an Express app with authentication.
* Generate a [Google Maps API](https://developers.google.com/maps/documentation/javascript/) key.
* Link the Google Maps script in the head of your `layout.ejs`.
* Load a Google map on the homepage (`/`).
* To begin with, center the map on the the GA campus (which is latitude: `51.515113` and longitude `-0.072051`).
* Make an AJAX request to TFL Api, to get back the data on all of the bike points.
* The endpoint can be found in the [documentation](https://api-portal.tfl.gov.uk/docs).
* Log the response in the console, locate the data that you need, and add a marker to the map for each bike point.

<img src="http://i.imgur.com/EEA1UqF.jpg" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

##### Info windows

* Each time you click on a maker, a Google Maps [Info window](https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple) should open, displaying the following:
	* The name of the location
	* How many bikes are available
	* How many free spaces there are

> Note: You will need to look at the Javascript `filter` method to get the bikes available and the free spaces from the AJAX response.

<img src="http://i.imgur.com/b3c5Oa6.jpg" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

##### Authentication

Most of the authentication functionality is included in `hadouken`. However, you will need to add a route to handle a `GET` request to `/logout`. **Note:** You may want to add this to your boilerplate Express app.

Update your code so that the following is true:

* A logged out user will see the following screen when they view the homepage.
* A logged out user can see 'Login' and 'Register' links.

<img src="http://i.imgur.com/X3ujNzS.jpg" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

* Only a logged in user can view the TFL bike map on the homepage (`/`).
* A logged in user can see a 'Logout' link.

<img src="http://i.imgur.com/oQ5yVnA.jpg" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

* Display the flash messages in the nav bar, and float them to the right.

<img src="http://i.imgur.com/4RXDB7l.jpg" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

##### Styling

* Add custom colours to your map using [Snazzy Maps](https://snazzymaps.com/).
* Add a custom Google Maps Marker.
* There isn't much styling to do, so you don't need to add a CSS framework.
![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## CSS Frameworks Lab

### Introduction

Your task is to take the starter code provided and use the Boostrap framework to recreate the website in the screenshots below. You will need to add Bootstrap classes to make the site responsive, so that the layout looks good on desktop, tablet and mobile.

#### Desktop

![Desktop](http://i.imgur.com/soNXolw.jpg)

#### Tablet

![Tablet](http://i.imgur.com/QqvyxtF.png)

#### Mobile

![Mobile](http://i.imgur.com/pqzwpjN.png)

### Instructions

Using the Bootstrap [documentation](https://v4-alpha.getbootstrap.com/getting-started/introduction/), add markup and classes to the HTML in the starter code to recreate the screenshots above.

The idea is that once you have linked up the Boostrap CSS and JS files, you can copy and paste the example markup from the docs, and add or remove HTML as required. The classes, ids and data attributes will do the hard work for you.

### Tasks

Use Bootstrap markup and classes to do the following:

##### Navbar

1. Add a responsive nav bar.
2. Change the `btn-outline-success` class on the search button in the navbar to be one that gives it the primary blue color instead of the green.
3. Add additional links to the navbar so that they match the screenshots.

##### Grid

1. Add a class of "container" to the `main`.
2. The `section` should take up 8 out of 12 columns, and then stretch to fill the full 12 when viewed on a screen smaller than a tablet.
3. The `aside` should take up 4 out of the 12 columns, and then stretch to fill the full 12 when viewed on a screen smaller than a tablet.

##### Images

1. Add a div with a class of "row" inside the `section`.
2. Inside the new row, create 6 divs that will form the grid for the images, and add the images to these divs.
3. Using Bootstrap [image classes](https://v4-alpha.getbootstrap.com/content/images/), make the images responsive and make them into "thumbnails".
4. Each image should take up a third of the `section` on desktop. On tablet they should take up half of the `section`, and on mobile they should stretch to fill the full width.

##### Form

1. Inside the `aside` there should be a form with a text input for the name, an email input for the email, a dropdown that includes two options (Trains or Trams) and a checkbox for the terms and conditions.
2. The terms and conditions text should be small.
3. The submit button should be full width.

### Custom CSS

Use custom CSS to complete the following tasks. You don't need to add any new classes to the HTML. Use the exisiting Boostrap classes to add styles.

1. Make the "Instatram" logo in the navbar bold.
2. Add a background image to the jumbotron (the `hero.jpg` image).
3. Position the background image in the center of the jumbotron.
4. Make the `background-size` property `cover`.
5. Make the text inside the jumbotron white.

###Bonus

##### Modals

Using the [documentation](http://v4-alpha.getbootstrap.com/components/modal/), look at Bootstrap modals. Using data attributes and ids, add markup to your `index.html` file so that when you click on an image, it opens in a modal with a close button. Add the responsive image class to these images as well.

![Modal](http://i.imgur.com/okZBmnd.png)

##### Offset Columns

Using the [documentation](https://v4-alpha.getbootstrap.com/layout/grid/#offsetting-columns), offset the text inside the jumbotron by 1 column to the left, when viewed on a tablet or larger.

![Offset](http://i.imgur.com/sGCX7be.png)
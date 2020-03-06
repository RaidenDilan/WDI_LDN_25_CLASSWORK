![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Rails Migrations Lab

### Introduction

Your task is to take the `starter-code` provided and complete the requirements listed below. You should use the **Tunr** example from the previous lesson as an example, along with the lesson notes.

### Setup

Once you are inside the Rails directory, run the following commands:

```sh
bundle
rails db:create
rails db:migrate
rails db:seed
```

### Tasks

* Write a migration to create a relationship between books and authors
	* A book `belongs_to` an author
	* An author `has_many` books
* When you create/update a book, you should be able to select the author from a dropdown (see the tips section below)
* Add genre as a new model. Genres should only have a name (as a `string`).
* Write a migration to create a relationship between books and genres
	* A genre `has_and_belongs_to_many` books
	* A book `has_and_belongs_to_many` genres
* When you create/update a book, you should be able to select multiple genres using checkboxes
* Display the author on the index and show page for each book
* Display the authors' books on their show page
* Display the books' genres on the books show page

<img src="http://i.imgur.com/LmKTpcU.png" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">

### Tips - important!

**1.** In order to print the author's full name in the dropdown (when you add/edit a book), add the following custom method into the author model:

```ruby
def full_name
  "#{first_name} #{last_name}"
end
```

You can then say:

```html
<%= f.collection_select :author_id, Author.all, :id, :full_name %>
```

**2.** When you are trying to print out the author's name on the index or show page for a book, you will need to write it like this:

```html
<%= book.author.try(:first_name) %>
```

This will prevent the error that occurs if books don't have authors yet. Have a look at the `.try()` documentation [here](https://apidock.com/rails/v3.2.1/Object/try).

**3.** If you want the styling for genres (as per the screenshot above) add a `<ul>` with the class of "genres", and print the `<li>`s inside.

### Bonus

Add a `has_many :through` relationship between authors and genres. Display an author's genres on the author show page, and use Google/documentation to remove duplicates.

<img src="http://i.imgur.com/peEYDaH.png" style="box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);">
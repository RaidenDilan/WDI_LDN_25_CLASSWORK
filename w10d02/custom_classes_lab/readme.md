---
title: Custom Classes Lab
type: lab
duration: "1:25"
creator:
    name: Micah Rich & Mike Hayden
    city: LA & London
competencies: Programming
---

# Custom Classes Lab

## Introduction

> This can be done alone or as a pair coding exercise

Your task for this module is to create five object classes from scratch, with methods & attributes to match. Keep in mind that methods can be both getters/setters, or actions that an instance of this object class should be able to do.

Methods can reference each other, and have the ability to change instance attributes. Take your time to consider which variables should be readable and writable.

## Exercise

#### Requirements

Create the following objects from scratch, with appropriate methods & attributes. You'll have ten minutes for each.

- Create a `Student` class. The student should be enrolled at a college or university. They should have a collection of classes that cannot be modified directly, but new classes can be added to it. They should also have an enrollment date and a graduation date which is automatically set to 12 weeks later.
- Create a `Vehicle` class which has a `license_plate` and `manufacture_date` which cannot be modified. It should also have a `color`, `owner` and `sale_price` which can be modified.
- Create a `Car` class which inherits `Vehicle` it should have a constant `WHEELS` of 4, and transmission which can be set to either `manual` or `automatic`
- Create a `Motorbike` class which also inherits from vehicle. It should have `WHEELS` constant of 2
- Create a `Product` class for an ecommerce site. It should have `name`, `origin`, `color`, `description`, `price`, `sku` and `image` properties. It should not be possible to modify `sku`
- Create a `Cart` class for the same ecommerce site. You should be able to put `Product` and only `Product` instances into the cart. The cart should be able to calculate the total cost of the products in it

> **Note:** You will need to require the `date` module at the top of your script


#### Deliverable

You should have 1 Ruby file, containing all the classes you've created.

## Additional Resources

- [Ruby Styleguide](https://github.com/bbatsov/ruby-style-guide)
- [Programming Ruby - The Pragmatic Programmer's Guide](http://phrogz.net/programmingruby/tut_classes.html)
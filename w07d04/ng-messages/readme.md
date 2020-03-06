---
title: ngClass and ngMessages
type: lab
duration: 1.25
creator:
    name: Alex Chin
    city: Ldn
competencies: Front-end MV*
---

# `ngClass` and `ngMessages`

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Previously, we looked at how to apply some classes using the `ngClass` directive and a basic form.

We can take this a little bit further with Angular's built-in [form validation](https://docs.angularjs.org/guide/forms).

Angular adds certain classes to the form's state (you might have seen this in the Chrome's Elements Tab?).

| Property | Class | Type | Description |
| -------- | ------| -----| ---------- |
| `$valid`   | `ng-valid` | _Boolean_ | Tells whether an item is currently valid based on the rules you placed.   |
| `$invalid`  | `ng-invalid`  | _Boolean_ | Tells whether an item is currently invalid based on the rules you placed. |
| `$pristine` | `ng-pristine` | _Boolean_ | True if the form/input **has not** been used yet.                         |
| `$dirty`    | `ng-dirty`    | _Boolean_ | True if the form/input **has** been used.                                 |
| `$touched`  | `ng-touched`  | _Boolean_ |True if the input **has** been blurred.                                   |

Using these validations, we can improve the UX of our form and help our users to enter the correct data.

### Adding `ngMessages` as a module dependency

We can either do our validations with either the normal Angular library or we can also use the [`ngMessages`](https://docs.angularjs.org/api/ngMessages/directive/ngMessages) directive, which provides enhanced support for displaying messages.

To install `ngMessages` using bower:

```bash
$ bower install angular-messages --save
```

You will then need to add this as a dependency in `app.js`:

```js
angular
  .module('donutApp', [
    'ngMessages'
  ]);
```

## Exercise

#### Requirements

Add the following validations to the Donut app:

- Flavor is required
- Only certain flavors can be added (strawberry, chocolate, custard or apple)
- Size is required
- Only certain styles can be added (small, medium or large)
- Only show the validation messages after submit/user focus
- Make sure that the form cannot be submitted if it is invalid

**Bonus:**

- Add some CSS styling to your validations
- Reset the form after submit (back to pristine and untouched)

#### Deliverable

Here is a screenshot of what your final code might look like:

![validations](https://cloud.githubusercontent.com/assets/40461/9593800/1ad6d962-504b-11e5-9338-f03a6ab4cacf.jpg)

#### Tips

- Attach your form to your `MainCtrl` using the `name` attribute on the form.
- Add `novalidate` to your `<form>` tag to stop the built in HTML5 validation popups.

## Additional Resources

- [`ngMessages` Docs](https://docs.angularjs.org/api/ngMessages)
- [Angular Validations Cheatsheet](http://www.ng-newsletter.com/posts/form-validation-with-angularjs.html)

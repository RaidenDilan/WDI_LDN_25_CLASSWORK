$().ready(function() {

  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },

      releaseDate: {
        required: true,
        match: [1-9][0-9]{4}-[0-1][0-9]{2}-[1-3][0-9]{2}
      },

      synopsis: {
        required: true,
        minlength: 255
      },

      genre: 'required'
    },

    messages: {
      name: {
        require: 'Please enter your name',
        minlength: 'Your name must consist of at least 2 characters'
      },

      releaseDate: {
        require: 'Please enter a release date',
        match: 'Please enter a valid date'
      },

      synopsis: {
        required: 'Please enter a synopsis',
        minlength: 'You\'re synopsis must be maximum 255 characters'
      },

      genre: 'Please enter a genre',
    },
  });

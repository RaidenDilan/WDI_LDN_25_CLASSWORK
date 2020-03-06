console.log('JS loaded!');

$(() => {
  $.get('http://localhost:3000/api/posts')
  .then((data) => {
    console.log('data', data);
  });
});

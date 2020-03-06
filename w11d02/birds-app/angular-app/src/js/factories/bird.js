angular
  .module('birdApp')
  .factory('Bird', Bird);

Bird.$inject = ['$resource', 'API_URL'];
function Bird($resource, API_URL) {
  return new $resource(`${API_URL}/birds/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
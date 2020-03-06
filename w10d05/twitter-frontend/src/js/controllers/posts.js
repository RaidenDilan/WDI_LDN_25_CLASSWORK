angular
  .module('twitter')
  .controller('PostsIndexCtrl', PostsIndexCtrl)
  .controller('PostsNewCtrl', PostsNewCtrl)
  .controller('PostsShowCtrl', PostsShowCtrl)
  .controller('PostsEditCtrl', PostsEditCtrl);

PostsIndexCtrl.$inject = ['Post'];
function PostsIndexCtrl(Post) {
  const vm = this;

  vm.all = Post.query();

}

PostsNewCtrl.$inject = ['User', 'Post', '$state'];
function PostsNewCtrl(User, Post, $state) {
  const vm = this;

  vm.users = User.query();

  function submit() {
    Post.save(vm.post)
    .$promise
      .then(() => $state.go('postsIndex'));
  }

  vm.submit = submit;

}

PostsShowCtrl.$inject = ['Post', '$stateParams', '$state'];
function PostsShowCtrl(Post, $stateParams, $state) {
  const vm = this;

  vm.post = Post.get($stateParams);

  function postsDelete() {
    vm.post
      .$remove()
      .then(() => $state.go('postsIndex'));
  }

  vm.delete = postsDelete;
}

PostsEditCtrl.$inject = ['User', 'Post', '$stateParams', '$state'];
function PostsEditCtrl(User, Post, $stateParams, $state) {
  const vm = this;

  vm.users = User.query();

  vm.post = Post.get($stateParams);

  function postsUpdate() {
    vm.post
      .$update()
      .then(() => $state.go('postsShow', $stateParams));
  }

  vm.update = postsUpdate;
}

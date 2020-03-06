angular
  .module('eventApp')
  .controller('EventsIndexCtrl', EventsIndexCtrl)
  .controller('EventsNewCtrl', EventsNewCtrl)
  .controller('EventsShowCtrl', EventsShowCtrl)
  .controller('EventsEditCtrl', EventsEditCtrl);

EventsIndexCtrl.$inject = ['Event'];
function EventsIndexCtrl(Event) {
  const vm = this;

  vm.all = Event.query();
}

EventsNewCtrl.$inject = ['Event', 'User', '$state'];
function EventsNewCtrl(Event, User, $state) {
  const vm = this;
  vm.event = {};
  vm.users = User.query();

  function eventsCreate() {
    Event
      .save({ event: vm.event })
      .$promise
      .then(() => $state.go('eventsIndex'));
  }

  vm.create = eventsCreate;
}

EventsShowCtrl.$inject = ['Event', 'User', 'Comment', '$stateParams', '$state', '$auth'];
function EventsShowCtrl(Event, User, Comment, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({ id: $auth.getPayload().id });

  vm.event = Event.get($stateParams);

  function eventsDelete() {
    vm.event
      .$remove()
      .then(() => $state.go('eventsIndex'));
  }

  vm.delete = eventsDelete;

  function eventsUpdate() {
    Event
      .update({id: vm.event.id, event: vm.event });
  }

  function addComment() {
    vm.comment.event_id = vm.event.id; // attaching the comment to the event id.

    Comment
      .save({ comment: vm.comment })
      .$promise
      .then((comment) => {
        vm.event.comments.push(comment);
        vm.comment = {}; // this clears the form out when the comment has been submitted
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    Comment
      .delete({ id: comment.id }) // pass in the comment_id we are delete and splice it out.
      .$promise
      .then(() => {
        const index = vm.event.comments.indexOf(comment);
        vm.event.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;

  function toggleAttending() {
    const index = vm.event.attendee_ids.indexOf(vm.currentUser.id);
    if (index > -1) {
      vm.event.attendee_ids.splice(index, 1); // grab a user and splice it from the array of users
      vm.event.attendees.splice(index, 1); // removes ourself from the array of attendees
    } else {
      vm.event.attendee_ids.push(vm.currentUser.id); //
      vm.event.attendees.push(vm.currentUser); // show the array of attendees in the page
    }
    eventsUpdate();
  }
  vm.toggleAttending = toggleAttending;

  //function for the show page atten/reject button to change
  function isAttending() {
    return $auth.getPayload() && vm.event.$resolved && vm.event.attendee_ids.includes(vm.currentUser.id); // only if you got back the data from the databsae then check for the event and if the user is already attending the event or not.
  }
  vm.isAttending = isAttending;
}

EventsEditCtrl.$inject = ['Event', 'User', '$stateParams', '$state'];
function EventsEditCtrl(Event, User, $stateParams, $state) {
  const vm = this;

  Event.get($stateParams).$promise.then((event) => {
    vm.event = event; // turning the event data form data from ruby/rails to javascript date.
    vm.event.date = new Date(event.date);
  });

  vm.users = User.query();

  function eventsUpdate() {
    Event
      .update({id: vm.event.id, event: vm.event })
      .$promise
      .then(() => $state.go('eventsShow', { id: vm.event.id }));
  }

  vm.update = eventsUpdate;
}

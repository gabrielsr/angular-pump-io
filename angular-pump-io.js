angular.module('pump', [])
.controller('Controller', ['$scope', function($scope) {

}])
.directive('pumpObject', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
      uid: '=',

    },
    templateUrl: 'object.html'
  }
})
.directive('pumpComments', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
      uid: '=',
      messages: '='
    },
    templateUrl: 'comments.html'
  }
})
.directive('pumpCommentForm', function() {
  return {
    restrict: "E",
    transclude:true,
    scope: {
      objectUid: '=',
      postComment: '&'
    },
    templateUrl: 'comment-form.html'
  }
});

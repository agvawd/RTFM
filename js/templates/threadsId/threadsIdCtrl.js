angular.module("RTFM").controller("threadsIdCtrl", function($scope, threadIdRef, commentsRef){
	var thread = threadIdRef.$asObject();

	thread.$bindTo($scope, 'thread');

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(username, text){
		$scope.comments.$add({
			username: username,
			text: text
		})
		$scope.newCommentText = '';
	}
})
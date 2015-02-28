'use strict';
angular.module("RTFM").controller("threadsCtrl", function($scope, threadsRef, threadsService){
	$scope.threads = threadsRef.$asArray();

	$scope.createThread = function(username, title){
		$scope.threads.$add({
			username: username,
			title: title
		})
		$scope.newThreadTitle = '';
	}
})
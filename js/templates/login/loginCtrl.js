angular.module("RTFM").controller("loginCtrl", function($scope, EnvironmentService, $location, threadsService){
	$scope.env = EnvironmentService.getEnv();

	$scope.logMeIn = function(existUser){
		var bool = threadsService.logUserIn(existUser.email, existUser.password);
		debugger;
	}

	$scope.addUser = function(newUser) {
		threadsService.addUser(newUser.email, newUser.password);
		$scope.newUser = '';
	}
})
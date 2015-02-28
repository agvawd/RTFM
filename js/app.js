var app = angular.module("RTFM", ['firebase', "ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/login", {
		templateUrl: "/js/templates/login/login.html",
		controller: "loginCtrl"
	})
	.when("/threads", {
		templateUrl: "/js/templates/threads/threads.html",
		controller: "threadsCtrl",
		resolve: {
			threadsRef: function(threadsService) {
				return threadsService.getThreads();
			}
		}
	})
	.when("/thread/:threadId", {
		templateUrl: "/js/templates/threadsId/threadsId.html",
		controller: "threadsIdCtrl",
		resolve: {
			threadIdRef: function(threadsService, $route) {
				return threadsService.getThread($route.current.params.threadId);
			},
			commentsRef: function(threadsService, $route){
				return threadsService.getComments($route.current.params.threadId);
			}
		}
	})
	.otherwise({
		redirectTo: "/login"
	})
})
.run(function($rootScope, $location, EnvironmentService){
  $rootScope.$on("$routeChangeStart", function(event, next, current){
	    var name = EnvironmentService.getUsername();
	    $rootScope.username = name;
	    // if(name) {
	    // 	$rootScope.username = name;
	    // }
	    // else {
	    // 	$location.path("/login");
	    // }
  })
})
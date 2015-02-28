angular.module("RTFM").factory("threadsService", function(EnvironmentService, $firebase, $location){
	var firebaseUrl = EnvironmentService.getEnv().firebase;
	
	return {
		getThreads: function() {
			return $firebase(new Firebase(firebaseUrl + '/threads'));
		},

		getThread: function(threadId) {
			return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
		},

		getComments: function(threadId){
			return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));	
		},		

		//create user
    addUser: function(email, password) {
      var ref = new Firebase(firebaseUrl);
      ref.createUser({
        email: email,
        password: password
      }, function(error, userData){
        if(error){
          console.log(error)
          $location.path("/login")
        }
        else {
          console.log(userData);
          $location.path("/threads")
        }
      })
    },

    //log in
    logUserIn: function(email, password){
      EnvironmentService.saveUsername(email);
      var ref = new Firebase(firebaseUrl);
      ref.authWithPassword({
        email: email,
        password: password
      }, function(error, authData){
        if(error) {
          console.log("Login Failed");
          $location.path("/login")
        }
        else {
          console.log("Authentication successful!");
          $location.path("/threads")
        }
      });
    }
	}
});
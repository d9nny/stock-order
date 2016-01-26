'use strict';

stockOrderApp.controller('UserController', ['$http', '$location' 'Auth', function($http, $location, Auth) {
	var self = this,

  var config = {
    headers: {
      'X-HTTP-Method-Override': 'POST'
    }
  };
        
  $http.get('/posts')
		.success(function(data) {
			self.posts = data;
			console.log(data)
		})
		.error(function(data) {
	});

      

	self.login = function() {
	  var credentials = {
          email: $scope.email,
          password: $scope.password
        };
	  console.log(credentials)

      Auth.login(credentials, config).then(function(user) {
          console.log(user); // => {id: 1, ect: '...'}
      }, function(error) {
          console.log("failed")
      });

        self.$on('devise:login', function(event, currentUser) {
            // after a login, a hard refresh, a new tab
            self.currentUser = Auth._currentUser.email

            $http.get('/posts')
							.success(function(data) {
								$scope.posts = data;
								console.log(data)
						})
						.error(function(data) {

						});
            //do an http.get in order to get the posts belonging to 
            //the current user?
        });

        self.$on('devise:new-session', function(event, currentUser) {
            // user logged in by Auth.login({...})
            self..currentUser = Auth._currentUser.email
        });
  };
 
 	self.logOut= function() {
 	  var config1 = {
      headers: {
        'X-HTTP-Method-Override': 'DELETE'
      }
    };
    var oldUser = self.currentUser;
 		
 		Auth.logout(config1).then(function(oldUser) {
 			self.currentUser = ""
 			console.log(oldUser.email)
      alert(oldUser.email + " you're signed out now.");
        $http.get('/posts')
					.success(function(data) {
						self.posts = data;
						console.log(data)
					})
					.error(function(data) {

					});
      }, function(error) {
          // An error occurred logging out.
      });

      $scope.$on('devise:logout', function(event, oldCurrentUser) {
            // ...
      });
 	};

}]);


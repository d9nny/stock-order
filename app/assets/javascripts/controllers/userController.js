'use strict';

stockOrderApp.controller('UserController', ['$http', '$location', 'Auth', function($http, $location, Auth) {
	var self = this;
 	self.config = {
    		headers: {
      		'X-HTTP-Method-Override': 'POST'
    		}
  		};
  self.path = 'http://localhost:3000/users';

	$http.get(self.path)
	.then( function (response) {
		self.users = response.data.users;
	});

	self.logIn = function() {
	  var credentials = {
          email: self.email,
          password: self.password
        };
	  console.log(credentials)

    Auth.login(credentials, self.config).then(function(user) {
        console.log(user); // => {id: 1, ect: '...'}
        $location.path('/home');
    }, function(error) {
        console.log("failed")
    });

    self.$on('devise:login', function(event, currentUser) {
        // after a login, a hard refresh, a new tab
        self.currentUser = Auth._currentUser.email
    });

    self.$on('devise:new-session', function(event, currentUser) {
        // user logged in by Auth.login({...})
        self.currentUser = Auth._currentUser.email
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
 			self.currentUser = "";
 			console.log(oldUser.email)
      alert(oldUser.email + " you're signed out now.");
        
      }, function(error) {
          // An error occurred logging out.
    });

    $scope.$on('devise:logout', function(event, oldCurrentUser) {
          // ...
  	});
 	};

	self.show = function () {
		$http.get(self.path)
		.then(function (response) {
			self.users = response.data.users;
		});
	};

	self.create = function () {
		var data = {
			email: self.email,
			password: self.password
		};
		$http.post(self.path, data)
		.then(function() {
			self.show();
			$location.path('/users');
		});
	};

	self.update = function (data, id) {
		$http.put(self.path + '/' + id, data)
		.then(function(response) {
			self.resultPut = response;
			$location.path('/users');
		});
	};

	self.delete = function (id) {
		$http.delete(self.path + '/' + id)
		.then(function() {
			self.show();
		});
	};

}]);


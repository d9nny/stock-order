'use strict';

angular.module('StockOrderApp.controllers').controller('UserController', ['$http', '$location', 'Auth', '$scope', function($http, $location, Auth, $scope) {
	var self = this;
	// self.path = 'http://localhost:3000/users';
	self.auth = Auth;
	self.loginTab = 0;
	console.log('Loaded userCtrl');

	self.setLoginTab = function(num) {
		self.loginTab = num;
	};

	self.activeLoginTab = function(num) {
		return (self.loginTab === num);
	}

	self.loggedIn = function() {
		return (self.auth.isAuthenticated() === false);
	};

	self.login = function() {
		var credentials = {
			email: self.email,
			password: self.password
		},
		config = {
			headers: {
				'X-HTTP-Method-Override': 'POST'
			}
		};
		console.log(credentials)

		Auth.login(credentials, self.config).then(function(user) {
			self.setLoginTab(2);
			$location.path('/companies');
		}, function(error) {
			self.setLoginTab(3);
		});
		
		$scope.$on('devise:login', function(event, currentUser) {
        // after a login, a hard refresh, a new tab
        self.currentUser = Auth._currentUser.email;
      });

		$scope.$on('devise:new-session', function(event, currentUser) {
        // user logged in by Auth.login({...})
        self.currentUser = Auth._currentUser.email;
      });
	};
	
	self.logOut= function() {
		var config1 = {
			headers: {
				'X-HTTP-Method-Override': 'DELETE'
			}
		};
		self.oldUser = self.currentUser;
		
		Auth.logout(config1).then(function(oldUser) {
			self.currentUser = "";
			console.log(self.oldUser.email)
			
		}, function(error) {
          // An error occurred logging out.
        });

		$scope.$on('devise:logout', function(event, oldCurrentUser) {
			self.setLoginTab(4);
			$location.path('/home');
		});
	};

	self.register = function() {
		var credentials = {
			email: self.email,
			password: self.password
		},
		config = {
			headers: {
				'X-HTTP-Method-Override': 'POST'
			}
		};
		console.log(credentials)

		Auth.register(credentials, self.config).then(function(user) {
        console.log(user); // => {id: 1, ect: '...'}
      }, function(error) {
      	console.log("failed")
      });

		$scope.$on('devise:register', function(event, currentUser) {
        // after a register, a hard refresh, a new tab
        self.currentUser = Auth._currentUser.email
      });

		$location.path('/users');
	};

}]);


	// $http.get(self.path)
	// .then( function (response) {
	// 	self.users = response.data.users;
	// 	console.log(self.users);
	// });

	// self.show = function () {
	// 	$http.get(self.path)
	// 	.then(function (response) {
	// 		self.users = response.data.users;
	// 	});
	// };

	// self.create = function () {
	// 	var data = {
	// 		email: self.email,
	// 		password: self.password
	// 	};
	// 	$http.post(self.path, data)
	// 	.then(function() {
	// 		self.show();
	// 		$location.path('/users');
	// 	});
	// };

	// self.update = function (data, id) {
	// 	$http.put(self.path + '/' + id, data)
	// 	.then(function(response) {
	// 		self.resultPut = response;
	// 		$location.path('/users');
	// 	});
	// };

	// self.delete = function (id) {
	// 	$http.delete(self.path + '/' + id)
	// 	.then(function() {
	// 		self.show();
	// 	});
	// };

//////////////


	// $http.get(self.path)
	// 	.then( function (response) {
	// 		self.users = response.data.users;
	// 		console.log(self.users);
	// });

	// self.show = function () {
	// 	$http.get(self.path)
	// 	.then(function (response) {
	// 		self.users = response.data.users;
	// 	});
	// };

	// self.create = function () {
	// 	var data = {
	// 		email: self.email,
	// 		password: self.password
	// 	};
	// 	$http.post(self.path, data)
	// 	.then(function() {
	// 		self.show();
	// 		$location.path('/users');
	// 	});
	// };

	// self.update = function (data, id) {
	// 	$http.put(self.path + id, data)
	// 	.then(function(response) {
	// 		self.resultPut = response;
	// 		$location.path('/users');
	// 	});
	// };

	// self.delete = function (id) {
	// 	$http.delete(self.path + id)
	// 	.then(function() {
	// 		self.show();
	// 	});
	// };

	// self.login = function (data, id) {
	// 	$http.put(self.path + '/sign_in', data)
	// 	.then(function(response) {
	// 		self.resultPut = response;
	// 		$location.path('/users');
	// 	});
	// };

	// self.logout = function (id) {
	// 	$http.delete(self.path + '/sign_out' + id)
	// 	.then(function() {
	// 		self.show();
	// 	});
	// };

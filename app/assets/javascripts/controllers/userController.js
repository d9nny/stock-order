'use strict';

angular.module('StockOrderApp.controllers').controller('UserController', ['$http', '$location', 'Auth', '$scope', function($http, $location, Auth, $scope) {
	var self = this;
	self.loginTab = 0;
	self.flashMessageTab = 0;
	console.log('Loaded userCtrl');

	self.setLoginTab = function() {
		self.loginTab += 1;
	};

	self.activeLoginTab = function(num) {
		return (self.loginTab % 2 === num);
	}

	self.activeflashMessageTab = function(num) {
		return (self.flashMessageTab === num);
	}

	self.loggedIn = function() {
		return (Auth.isAuthenticated() === true);
	};

	self.admin = function() {
		if (self.loggedIn()) {
			if (Auth._currentUser.admin === true) {
				return true;
			}
		} 
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
			self.flashMessageTab = 2;
			self.loginTab += 1;
			$location.path('/home');
		}, function(error) {
			self.flashMessageTab = 3;
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
			self.flashMessageTab = 4;
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

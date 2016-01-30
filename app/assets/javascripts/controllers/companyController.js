'use strict';

angular.module('StockOrderApp.controllers').controller('CompanyController', ['$http', '$location', function($http, $location) {
	var self = this;
	// self.path = 'http://localhost:3000/companies';
		self.path = 'http://infinite-coast-37394.herokuapp.com/companies';

	console.log('Loaded compCtrl');

	$http.get(self.path)
	.then( function (response) {
		self.companies = response.data.companies;
	});

	self.show = function () {
		$http.get(self.path)
		.then(function (response) {
			self.companies = response.data.companies;
		});
	};

	self.create = function () {
		var data = {
			name: self.name,
			budget: self.budget
		};
		$http.post(self.path, data)
		.then(function() {
			self.show();
			$location.path('/companies');
		});
	};

	self.update = function (data, id) {
		$http.put(self.path + '/' + id, data)
		.then(function(response) {
			self.resultPut = response;
			$location.path('/companies');
		});
	};

	self.delete = function (id) {
		$http.delete(self.path + '/' + id)
		.then(function() {
			self.show();
		});
	};
}]);
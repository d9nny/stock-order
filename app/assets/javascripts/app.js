var StockOrderApp = angular.module('StockOrderApp', ['ngRoute', 'templates', 'ngResource', 'xeditable', 'Devise', 'StockOrderApp.controllers']);

	StockOrderApp.run(function(editableOptions) {
	  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	});

 	StockOrderApp.config(function(AuthProvider) {
    // Configure Auth service with AuthProvider
  });

	StockOrderApp.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'main/home.html'
	      })
	      .when('/login', {
	        templateUrl: 'users/loginUser.html',
	        controller: 'UserController',
	        controllerAs: 'userCtrl'
	      })
	      .when('/companies', {
	        templateUrl: 'companies/viewCompanies.html',
	        controller: 'CompanyController',
	        controllerAs: 'compCtrl',
	        resolve: {
	          auth: ['Auth', '$location', '$q', function(Auth, $location, $q) {
	         		console.log(Auth.isAdmin());
	         		var deferred = $q.defer(); 
	       			if (!(Auth.isAdmin() === true)) {
	       				$location.path('/login');
				      }
				      deferred.resolve();
      				return deferred.promise;
	          }]
	        }
	      })
	      .when('/companies/new', {
	        templateUrl: 'companies/newCompany.html',
	        controller: 'CompanyController',
	        controllerAs: 'compCtrl'
	      })
	      .when('/users', {
	        templateUrl: 'users/viewUsers.html',
	        controller: 'UserController',
	        controllerAs: 'userCtrl'
	      })
	      .when('/users/new', {
	        templateUrl: 'users/newUser.html',
	        controller: 'UserController',
	        controllerAs: 'userCtrl'
	      })
	      .otherwise({
        redirectTo: '/home'
      });
	}]);
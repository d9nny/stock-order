var stockOrderApp = angular.module('StockOrderApp', ['ngRoute', 'templates', 'ngResource', 'xeditable', 'Devise']);

	stockOrderApp.run(function(editableOptions) {
	  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	});

 	stockOrderApp.config(function(AuthProvider) {
        // Configure Auth service with AuthProvider
    }).
    controller('userCtrl', function(Auth) {
        // Use your configured Auth service.
        console.log(Auth._currentUser);
        console.log(Auth.isAuthenticated());
  	});

	stockOrderApp.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'main/home.html'
	      })
	      .when('/companies', {
	        templateUrl: 'companies/viewCompanies.html',
	        controller: 'CompanyController',
	        controllerAs: 'compCtrl'
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
        redirectTo: '/'
      });
	}]);
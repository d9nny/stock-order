var stockOrderApp = angular.module('StockOrderApp', ['ngRoute', 'templates', 'ngResource', 'xeditable']);

	stockOrderApp.run(function(editableOptions) {
	  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
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
	      .otherwise({
        redirectTo: '/'
      });
	}]);
var stockOrderApp = angular.module('stockOrderApp', ['ngRoute', 'templates', 'ngResource', 'xeditable']);

	stockOrderApp.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'main/home.html'
	      })
	      .otherwise({
        redirectTo: '/'
      });
	}]);
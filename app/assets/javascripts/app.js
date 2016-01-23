var stockOrderApp = angular.module('stockOrderApp', ['ngRoute', 'templates', 'ngResource', 'xeditable']);

	stockOrderApp.run(function(editableOptions) {
	  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	});

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
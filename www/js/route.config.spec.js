(function() {
	'use strict';
	angular
		.module('starter')
		.config(config);

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
		    .state('dashboard', {
		        url: '/dashboard',
		        templateUrl: 'template/dashboard/dashboard.html',
		        controller: 'DashController',
		        controllerAs: 'vm'
		    })
		    .state('digitalticket', {
		        url: '/digitalticket',
		        templateUrl: 'template/digitalticket/digitalticket.html',
		        controller: 'DigitalticketController'
		    })
		$urlRouterProvider.otherwise('/dashboard');
	}
})();

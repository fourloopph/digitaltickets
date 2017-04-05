'use strict';

angular.module('starter')
	.directive('navigation', function(){
		return{
			restrict: 'AE',
			templateUrl: 'template/navigation.html',
		};
	})
	.directive('tab', function(){
		return{
			restrict: 'AE',
			templateUrl: 'template/tab.html',
		};
	});

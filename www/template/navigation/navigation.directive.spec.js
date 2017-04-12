(function() {
	'use strict';
	angular
		.module('starter')
		.directive('navigation', navigation);

	function navigation() {
		return{
			restrict: 'AE',
			templateUrl: 'template/navigation/navigation.html',
		};
	}
})();
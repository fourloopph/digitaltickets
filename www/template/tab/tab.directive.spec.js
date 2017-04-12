(function() {
	'use strict';
	angular
		.module('starter')
		.directive('tab', tab);

	function tab() {
		return{
			restrict: 'AE',
			templateUrl: 'template/tab/tab.html',
		};
	}
})();
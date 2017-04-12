(function() {
	'use strict';
	angular
		.module('starter')
		.run(run)
		.config(config);

	function run($ionicPlatform) {
		$ionicPlatform.ready(function() {
		    if (window.StatusBar) {
		        StatusBar.styleDefault();
		    }
		});
	}
	function config($ionicConfigProvider) {
		$ionicConfigProvider.views.transition('none');
	}		
})();

(function() {
	'use strict';
	angular
		.module('starter')
		.service('DataService', DataService);

	function DataService() {
		this.device = null;
		this.item = null;
		this.selectedIndex = null;
	}
})();
(function(){
	'use strict';
	angular
		.module('starter')
		.controller('DashController', DashController);

	function DashController(
		$http,
		$state,
		$timeout,
		$ionicSlideBoxDelegate,
		DataService) {

		var vm = this;

		vm.dashDeviceAnim = 'slideInLeft';
		vm.title1 = 'fadeInDown';
		vm.title2 = 'fadeInDown';
		vm.title3 = 'fadeInDown';
		$http.get('app.data.json').then(function(response) {
		    vm.device = response.data.mobilePhones;
		    DataService.device = vm.device;
		    vm.setClickedDevice = function(index, item) {
		    	// @animation		    	
		    	$timeout(function() {
		    		vm.dashDeviceAnim = 'slideOutLeft';
		    		vm.title1 = 'fadeOutUp';
		    		vm.title2 = 'fadeOutUp';
		    		vm.title3 = 'fadeOutUp';
		    	}, 500);
		    	$timeout(function() {
		    		vm.dashDeviceAnim = 'slideInLeft';
		    		vm.title1 = 'fadeInDown';
		    		vm.title2 = 'fadeInDown';
		    		vm.title3 = 'fadeInDown';
		    	}, 1500);		    	
		    	vm.selectedItem = index;
		        DataService.selectedIndex = vm.selectedItem;
		        DataService.item = item;
		        $timeout(function() {	        	
		        	vm.selectedItem = null;
		            $state.go('digitalticket', null, {
		               location: 'replace'
		            })
		        }, 1500);  
		    }
		})
	}
})();
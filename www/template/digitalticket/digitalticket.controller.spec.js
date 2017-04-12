(function() {
	'use strict';
	angular
		.module('starter')
		.controller('DigitalticketController', DigitalticketController);

	function DigitalticketController(
		$window,
		$http,
		$scope,
		$ionicSlideBoxDelegate,
		$timeout,$state,
		$ionicModal,
		DataService) {

		$scope.item = DataService.item;    
		$scope.device = DataService.device;
		$scope.selectedItem = DataService.selectedIndex;
		$scope.switchPoint = $scope.selectedItem;
		$scope.deviceName = $scope.item.name;
		$scope.deviceValue = $scope.item.value;
		$scope.deviceImage = $scope.item.image;
		// @set the rate and max variables
		$scope.rating = {};
		$scope.rating.rate = 3;
		$scope.rating.max = 5;
		// @animation
		$scope.landingPageAnim = '';
		$scope.backButtonNav = 'fadeInLeft';

		$http.get('app.data.json').then(function(response) {
			$scope.templates = response.data.templatePages;
		});
		$timeout(function() {
		   $scope.imageFloat = 'imageFloat';
		}, 5000);		
		$scope.setClickedDevice = function(index, item) {
		    $scope.switchPoint = index;
		    $scope.selectedItem = index;
		    $scope.deviceName = item.name;
		    $scope.deviceValue = item.value;
		    $scope.deviceImage = item.image;
		}
		$scope.backToDashboard = function() {			
			$scope.backButtonNav = 'fadeOutLeft';
			$scope.landingPageAnim = 'fadeOut';
		    $timeout(function() {
		        $state.go('dashboard', null, {
		           location: 'replace'
		        })                
		    }, 500); 
		}
		// to check if slide box has changed this is for price page
		$scope.slideChanged = function(index) {
		    if (index != 8) {
		        $scope.showAction0 = true;
		        $scope.showAction1 = false;
		        $scope.showAction2 = false;
		    } else if (index == 8) {
		        $scope.showAction0 = true;
		        $scope.showAction1 = false;
		        $scope.showAction2 = false;
		        $scope.action1Anim = 'fadeInLeft';
		    }
		}

		// function for navigation if tapped occurs
		$scope.changeImage = function() {
		    $scope.showAction0 = 'true';
		    // START > this is for positioning the active slide it uses angular.element
		    var inactive = angular.element(document.querySelector('.slidingTabs ul li.tab-active'));
		    inactive.removeClass('tab-active');

		    $ionicSlideBoxDelegate.slide(0, [900]); //---to return the slide indicator to 0 position;
		    var active = angular.element(document.querySelector('.slidingTabs ul li:nth-child(1)'));
		    active.addClass('tab-active');
		}

		// animations and transitions for price page
		$scope.action1 = function(action, option) {
		    if (action == true) {
		        $scope.pageAnim2 = '';
		        $timeout(function() {
		            $scope.action1Anim = 'fadeOutLeft';
		            $scope.action2Anim = 'fadeInUp';
		            $scope.showAction1 = action;
		        }, 300);
		        if (option == 'personal') {
		            $scope.title = 'Personal';
		            $scope.fromPrice1 = 69;
		            $scope.fromPrice2 = 74;
		            $scope.fromPrice3 = 95;
		            $scope.fromPrice4 = 130;
		            $scope.colAnim1_1 = 'animate';
		        } else if (option == 'business') {
		            $scope.title = 'Business';
		            $scope.fromPrice1 = 84;
		            $scope.fromPrice2 = 97;
		            $scope.fromPrice3 = 112;
		            $scope.fromPrice4 = 171;
		            $scope.colAnim2_1 = 'animate';
		        } else if (option == 'prepaid') {
		            $scope.title = 'Prepaid';
		            $scope.fromPrice1 = 799;
		            $scope.fromPrice2 = 1200;
		            $scope.fromPrice3 = 1350;
		            $scope.fromPrice4 = 2810;
		            $scope.colAnim3_1 = 'animate';
		        }
		    } else if (action == false) {
		        $timeout(function() {
		            $scope.action2Anim = 'fadeOutDown';
		            $scope.action1Anim = 'fadeInLeft';
		        }, 300);
		        $scope.colAnim1_1 = '';
		        $scope.colAnim2_1 = '';
		        $scope.colAnim3_1 = '';
		        $scope.pageAnim2 = 'animate';
		    }
		}
		$scope.action2 = function(action2, size, priceSize) {
		    if (action2 == true) {
		        $scope.pageAnim3 = '';
		        $timeout(function() {
		            $scope.action3Anim = 'fadeInUp';
		            $scope.action2Anim = 'fadeOutLeft';
		            $scope.showAction2 = action2;
		        }, 300);
		        if (size == 's') {
		            $scope.size = 'S';
		            $scope.priceSize = priceSize;
		            $scope.colAnim1_2 = 'animate';
		        } else if (size == 'm') {
		            $scope.size = 'M';
		            $scope.priceSize = priceSize;
		            $scope.colAnim2_2 = 'animate';
		        } else if (size == 'l') {
		            $scope.size = 'L';
		            $scope.priceSize = priceSize;
		            $scope.colAnim3_2 = 'animate';
		        } else if (size == 'xl') {
		            $scope.size = 'XL';
		            $scope.priceSize = priceSize;
		            $scope.colAnim4_2 = 'animate';
		        }
		    } else if (action2 == false) {
		        $timeout(function() {
		            $scope.action2Anim = 'fadeInLeft';
		            $scope.action3Anim = 'fadeOutDown';
		        }, 300);
		        $scope.colAnim1_2 = '';
		        $scope.colAnim2_2 = '';
		        $scope.colAnim3_2 = '';
		        $scope.colAnim4_2 = '';
		        $scope.pageAnim3 = 'animate';
		    }
		}

		// this is for modal TERMS AND CONDITIONS
		$ionicModal.fromTemplateUrl('template/termsAndConditions/termsAndConditions.html', function(modal) {}, {
		    animation: 'slide-in-up',
		    scope: $scope,
		}).then(function(modal) {
		    	$scope.modal = modal;
			});
			$scope.openModal = function() {
			    $scope.modal.show();
			};
			$scope.closeModal = function() {
			    $scope.modal.hide();
			};
			$scope.$on('$destroy', function() {
			    $scope.modal.remove();
			});
			$scope.$on('modal.hidden', function() {
			});
			$scope.$on('modal.removed', function() {
			});

		// this animation is for first glance e.g click to extra and price
		$scope.goToPrice = function(animate) {
		    $timeout(function() {
		        $scope.toPriceAnim = animate;
		    }, 5);
		    $timeout(function() {
		        var inactive = angular.element(document.querySelector('.slidingTabs ul li.tab-active'));
		        inactive.removeClass('tab-active');
		        $ionicSlideBoxDelegate.slide(0, [900]);
		        var active = angular.element(document.querySelector('.slidingTabs ul li:nth-child(9)'));
		        active.addClass('tab-active');
		        $ionicSlideBoxDelegate.slide(8, [900]);
		    }, 300);
		    $scope.toPriceAnim = '';
		}
		$scope.goToExtras = function(animate) {
		    $timeout(function() {
		        $scope.toExtrasAnim = animate;
		    }, 5);
		    $timeout(function() {
		        var inactive = angular.element(document.querySelector('.slidingTabs ul li.tab-active'));
		        inactive.removeClass('tab-active');

		        $ionicSlideBoxDelegate.slide(0, [900]);
		        var active = angular.element(document.querySelector('.slidingTabs ul li:nth-child(8)'));
		        active.addClass('tab-active');
		        $ionicSlideBoxDelegate.slide(7, [900]);
		    }, 300);
		    $scope.toExtrasAnim = '';
		}

		// script for the progress bar animation
		var timer1, timer2, timer3, timer4,
		    timer5, timer6, timer7, timer8,
		    timer9, timer10, timer11, timer12;
		$scope.showCard = function() {
		    $scope.holderzIndex = 9999999999;
		    $scope.buttonMainEnter = 'zoomOut';
		    $scope.buttonMainAnim = 'zoomOutAnim';
		    timer1 = $timeout(function() {
		        $scope.pAnim = 'fadeInUp';
		    }, 0);
		    timer2 = $timeout(function() {
		        $scope.showCardSwipeWrapper = true;
		        $scope.cardSwipeWrapper = 'zoomIn';
		        $scope.buttonCloseAnim = 'zoomIn';
		        $scope.mainSectionWrapperAnim = 'zoomInAnim';
		        $scope.showMainSection = true;
		    }, 690);
		    timer3 = $timeout(function() {
		        $scope.showBar = 'true';
		        $scope.barAnim = 'fadeIn';
		    }, 700);
		    timer4 = $timeout(function() {
		        $scope.saveDetailsAnim = 'textAnim';
		    }, 1150);
		    timer5 = $timeout(function() {
		        $scope.centerButtonAnim = 'moveUp';
		    }, 2000);
		    timer6 = $timeout(function() {
		        $scope.centerButtonWrapperAnim = 'zoomOutAnim';
		        $scope.pAnim = 'fadeOut';
		    }, 6000);
		    timer7 = $timeout(function() {
		        $scope.showCardSwipeGif = 'true';
		        $scope.cardSwipeGifAnim = 'fadeIn'
		    }, 6850);
		    timer8 = $timeout(function() {
		        $scope.saveDetailsWrapperExit = 'fadeOut';
		        $scope.saveToDetailsExit = true;
		    }, 13000);
		    timer9 = $timeout(function() {
		        $scope.cardSwipeGifAnim = 'zoomOut';
		    }, 13200);
		    timer10 = $timeout(function() {
		        $scope.checkAnim = 'pulse';
		        $scope.showCheck = 'true';
		    }, 13400);
		    timer11 = $timeout(function() {
		        $scope.badgeAnim = 'zoomIn';
		        $scope.showBadge = 'true';
		        $scope.showp2 = true;
		        $scope.pAnim2 = 'fadeInUp';
		    }, 13550);
		    timer12 = $timeout(function() {
		        $scope.saveToCardAnim = 'zoomIn';
		    }, 13600);                
		}

		// stop progress bar function
		$scope.stopProgressBar = function() {  
		    $scope.count = 500;
		    $timeout.cancel(timer1);
		    $timeout.cancel(timer2);
		    $timeout.cancel(timer3);
		    $timeout.cancel(timer4);
		    $timeout.cancel(timer5);
		    $timeout.cancel(timer6);
		    $timeout.cancel(timer7);
		    $timeout.cancel(timer8);
		    $timeout.cancel(timer9);
		    $timeout.cancel(timer10);
		    $timeout.cancel(timer11);
		    $timeout.cancel(timer12);
		}

		// timer for progress bar    
		$scope.roundProgressData = {};
		$scope.count = 0; 

		$scope.startProgressBar = function myhandler() {
	        $ionicSlideBoxDelegate.enableSlide( false );
	        $scope.shield = 'shieldOn'; 
	        if ($scope.count == 500) { 
	        $scope.buttonCloseAnim = 'tada';              
	            $timeout(function() {
	                $scope.checkAnim = 'zoomOut';
	                $scope.badgeAnim = 'zoomOut';
	                $scope.saveDetailsAnim = 'zoomOut';
	                $scope.saveToCardAnim = 'zoomOut';                    
	                $scope.mainSectionWrapperAnim = 'zoomOutAnim';
	                $scope.barAnim = 'zoomOut';
	                $timeout(function() {
	                    $scope.showMainSection = false;
	                }, 400);
	                $scope.shield = 'shieldOff';                   
	            }, 900);
	            
	            $timeout(function() {
	                $scope.barAnim = '';
	                $scope.showBar = '';
	                $scope.pAnim2 = '';
	                $scope.showp2 = '';
	                $scope.showBadge = '';
	                $scope.showCheck = '';
	                $scope.saveToCardAnim = '';
	                $scope.showCardSwipeGif = '';
	                $scope.cardSwipeGifAnim = '';
	                $scope.saveDetailsWrapperExit = '';
	                $scope.centerButtonAnim = '';
	                $scope.pAnim = '';
	                $scope.centerButtonWrapperAnim = '';
	                $scope.cardSwipeWrapper = 'zoomOut';
	                $scope.mainSectionWrapperAnim = '';
	                $scope.buttonMainEnter = 'zoomIn';
	                $scope.buttonMainAnim = 'zoomInAnim';
	                $timeout(function() {
	                    $scope.holderzIndex = 0;
	                }, 900);
	                
	                $scope.saveToDetailsExit = false;
	            }, 1300);
	            $scope.count = 0;
	            $ionicSlideBoxDelegate.enableSlide( true );
	            return;
	        } else {
	            if ($scope.count == 0) {
	                $timeout(function() {
	                    $scope.count = 1;
	                }, 200);
	            } else {
	                $scope.count++;
	            }
	        }
	        $timeout(myhandler, 32); // countdown tick of the progress bar
	        var total = $scope.count;
	        $scope.roundProgressData = {
	            label: total
	        }
	    }
		$scope.$watch('roundProgressData', function(newValue, oldValue) {
		    newValue.percentage = newValue.label / 500;
		}, true);
	}
})();
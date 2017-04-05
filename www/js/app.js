'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngAnimate', 'ionic.rating', 'ui.router', 'angular.directives-round-progress'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                //cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'template/dashboard.html',
            controller: 'DashController'
        })
        .state('digitalticket', {
            url: '/digitalticket',
            templateUrl: 'template/digitalticket.html',
            controller: 'MainPageController'
        })
    $urlRouterProvider.otherwise('/dashboard');
})

.config(function($ionicConfigProvider) {
      $ionicConfigProvider.views.transition('none');
})

.controller('DashController', function($rootScope, $scope, $http, $state, $timeout, $ionicSlideBoxDelegate) {
    $http.get('js/storage.json').then(function(response) {

        // for dashboarad animation
        //$rootScope.dashboardAnim = '';

        $scope.changePage = function(phone) { /*click event for dashboard animation*/

            $timeout(function() {
                // $rootScope.dashboardAnim = 'fadeOutLeft';
                $state.go('digitalticket', null, {
                    location: 'replace'
                })
            }, 1000);

            $rootScope.landingPageAnim = 'fadeIn';

            $rootScope.title = 'fadeOutUp';
            // for back button on navigation
            $rootScope.backButtonNav = 'fadeInLeft';

            $timeout(function() {
                $rootScope.toBeFade = 'fadeOutLeft';
            }, 400);
            $timeout(function() {
                $rootScope.toBeFade = '';
                $rootScope.title = '';
            }, 3000);
            // $timeout(function() {
            //     $rootScope.dashboard = 'hidden';
            // }, 1000);

            // this is for temporary image locations when click after dashboard
            $rootScope.navImage1 = response.data.navigation[0].imageWhite;
            $rootScope.navImage2 = response.data.navigation[1].imageWhite;
            $rootScope.navImage3 = response.data.navigation[2].imageWhite;
            $rootScope.navImage4 = response.data.navigation[3].imageWhite;

            // this is for temporary button colors on navigation after dashboard page
            $rootScope.bgColor1 = response.data.colors[0].backgroundColor;
            $rootScope.borderColor1 = response.data.colors[0].borderColor;
            $rootScope.textColor1 = response.data.colors[0].textColor;
            $rootScope.bgColor2 = response.data.colors[0].backgroundColor;
            $rootScope.borderColor2 = response.data.colors[0].borderColor;
            $rootScope.textColor2 = response.data.colors[0].textColor;
            $rootScope.bgColor3 = response.data.colors[0].backgroundColor;
            $rootScope.borderColor3 = response.data.colors[0].borderColor;
            $rootScope.textColor3 = response.data.colors[0].textColor;
            $rootScope.bgColor4 = response.data.colors[0].backgroundColor;
            $rootScope.borderColor4 = response.data.colors[0].borderColor;
            $rootScope.textColor4 = response.data.colors[0].textColor;

            if (phone == 'phone1_id') {
                $rootScope.clickAnim1 = 'click';
                $rootScope.deviceSelected = response.data.navigation[0].name;
                $rootScope.imageUrl_Front = response.data.navigation[0].imageFront;
                $rootScope.imageUrl_Back = response.data.navigation[0].imageBack;
                $rootScope.navImage1 = response.data.navigation[0].imageColored;
                $rootScope.bgColor1 = '#152582';
                $rootScope.borderColor1 = '#152582';
                $rootScope.textColor1 = 'white';
            } else if (phone == 'phone2_id') {
                $rootScope.clickAnim2 = 'click';
                $rootScope.deviceSelected = response.data.navigation[1].name;
                $rootScope.imageUrl_Front = response.data.navigation[1].imageFront;
                $rootScope.imageUrl_Back = response.data.navigation[1].imageBack;
                $rootScope.navImage2 = response.data.navigation[1].imageColored;
                $rootScope.bgColor2 = '#152582';
                $rootScope.borderColor2 = '#152582';
                $rootScope.textColor2 = 'white';
            } else if (phone == 'phone3_id') {
                $rootScope.clickAnim3 = 'click';
                $rootScope.deviceSelected = response.data.navigation[2].name;
                $rootScope.imageUrl_Front = response.data.navigation[2].imageFront;
                $rootScope.imageUrl_Back = response.data.navigation[2].imageBack;
                $rootScope.navImage3 = response.data.navigation[2].imageColored;
                $rootScope.bgColor3 = '#152582';
                $rootScope.borderColor3 = '#152582';
                $rootScope.textColor3 = 'white';
            } else {
                $rootScope.clickAnim4 = 'click';
                $rootScope.deviceSelected = response.data.navigation[3].name;
                $rootScope.imageUrl_Front = response.data.navigation[3].imageFront;
                $rootScope.imageUrl_Back = response.data.navigation[3].imageBack;
                $rootScope.navImage4 = response.data.navigation[3].imageColored;
                $rootScope.bgColor4 = '#152582';
                $rootScope.borderColor4 = '#152582';
                $rootScope.textColor4 = 'white';
            }
        }
    })
})

.controller('MainPageController', function($window, $scope, $rootScope, $http, $ionicSlideBoxDelegate, $timeout, $state, $ionicModal) {
    $http.get('js/storage.json').then(function(response) {

        // back to dacsboard function on navigation
        // $rootScope.dashboard = '';

        // back to dacsboard function on navigation
        $scope.backToDashboard = function() {

            $timeout(function() {
                $state.go('dashboard', null, {
                    location: 'replace'
                })
            }, 1000);

            $rootScope.landingPageAnim = 'fadeOutRight';
            // $rootScope.dashboard = 'visible';
            $rootScope.backButtonNav = 'fadeOutLeft';
            $rootScope.toBeFade = 'fadeInLeft';
            $rootScope.title = 'fadeInDown';

            $rootScope.clickAnim1 = '';
            $rootScope.clickAnim2 = '';
            $rootScope.clickAnim3 = '';
            $rootScope.clickAnim4 = '';
        }


        // to animate the navigation board
        $scope.navAnimMaster = 'slideInDown';

        // effects for slide pages default from ion-slide-box
        $scope.options = {
                loop: true,
                effect: 'fade',
                speed: 1000,
            }
            // for main button
        $scope.buttonMainEnter = 'fadeIn';

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

        // set the rate and max variables
        $scope.rating = {};
        $scope.rating.rate = 3;
        $scope.rating.max = 5;

        $scope.changeImage = function(phone_id) {

                $rootScope.bgColor1 = 'white';
                $rootScope.borderColor1 = 'black';
                $rootScope.textColor1 = 'black';
                $rootScope.bgColor2 = 'white';
                $rootScope.borderColor2 = 'black';
                $rootScope.textColor2 = 'black';
                $rootScope.bgColor3 = 'white';
                $rootScope.borderColor3 = 'black';
                $rootScope.textColor3 = 'black';
                $rootScope.bgColor4 = 'white';
                $rootScope.borderColor4 = 'black';
                $rootScope.textColor4 = 'black';

                $scope.showAction0 = 'true';

                $scope.navAnimMaster = '';
                $scope.navAnim1 = '';
                $scope.navAnim2 = '';
                $scope.navAnim3 = '';
                $scope.navAnim4 = '';

                $rootScope.navImage1 = response.data.navigation[0].imageWhite;
                $rootScope.navImage2 = response.data.navigation[1].imageWhite;
                $rootScope.navImage3 = response.data.navigation[2].imageWhite;
                $rootScope.navImage4 = response.data.navigation[3].imageWhite;

                if (phone_id == 'phone1_id') {
                    $rootScope.deviceSelected = response.data.navigation[0].name;
                    $rootScope.imageUrl_Front = response.data.navigation[0].imageFront;
                    $rootScope.imageUrl_Back = response.data.navigation[0].imageBack;
                    $rootScope.navImage1 = response.data.navigation[0].imageColored;

                    $scope.navAnim1 = 'animate';
                    $scope.pageAnim = 'pageAnim';

                    $rootScope.bgColor1 = '#152582';
                    $rootScope.borderColor1 = '#152582';
                    $rootScope.textColor1 = 'white';

                } else if (phone_id == 'phone2_id') {
                    $rootScope.deviceSelected = response.data.navigation[1].name;
                    $rootScope.imageUrl_Front = response.data.navigation[1].imageFront;
                    $rootScope.imageUrl_Back = response.data.navigation[1].imageBack;
                    $rootScope.navImage2 = response.data.navigation[1].imageColored;

                    $scope.navAnim2 = 'animate';

                    $rootScope.bgColor2 = '#152582';
                    $rootScope.borderColor2 = '#152582';
                    $rootScope.textColor2 = 'white';

                } else if (phone_id == 'phone3_id') {
                    $rootScope.deviceSelected = response.data.navigation[2].name;
                    $rootScope.imageUrl_Front = response.data.navigation[2].imageFront;
                    $rootScope.imageUrl_Back = response.data.navigation[2].imageBack;
                    $rootScope.navImage3 = response.data.navigation[2].imageColored;

                    $scope.navAnim3 = 'animate';

                    $rootScope.bgColor3 = '#152582';
                    $rootScope.borderColor3 = '#152582';
                    $rootScope.textColor3 = 'white';

                } else {
                    $scope.clickAnim = 'navClick';
                    $rootScope.deviceSelected = response.data.navigation[3].name;
                    $rootScope.imageUrl_Front = response.data.navigation[3].imageFront;
                    $rootScope.imageUrl_Back = response.data.navigation[3].imageBack;
                    $rootScope.navImage4 = response.data.navigation[3].imageColored;

                    $scope.navAnim4 = 'animate';

                    $rootScope.bgColor4 = '#152582';
                    $rootScope.borderColor4 = '#152582';
                    $rootScope.textColor4 = 'white';
                }

                // START > this is for positioning the active slide it uses angular.element
                var inactive = angular.element(document.querySelector('.slidingTabs ul li.tab-active'));
                inactive.removeClass('tab-active');

                $ionicSlideBoxDelegate.slide(0, [900]); //---to return the slide indicator to 0 position;
                var active = angular.element(document.querySelector('.slidingTabs ul li:nth-child(1)'));
                active.addClass('tab-active');
                // END > this is for positioning the active slide it uses angular.element

            } // END > of changeImage function

        // animatins and transitins for price page
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

                $scope.colAnim1 = '';
                $scope.colAnim2 = '';
                $scope.colAnim3 = '';

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

        // click event effect for card wave like effect
        $scope.clickCard = function() {
            var removeDiv = angular.element(document.querySelector('div.card1'));
            removeDiv.removeClass('card1');

            $timeout(function() {
                $scope.cardAnim = 'cardAnim';
            }, 0);
            $scope.cardAnim = '';
        }


        // this is for modal
        $ionicModal.fromTemplateUrl('template/termsAndConditions.html', function(modal) {}, {
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
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
    });

    // this is animation for first glance e.g click for extra and price
    $scope.goToPrice = function(animate) {
        $timeout(function() {
            $scope.toPriceAnim = animate;
        }, 5);
        $timeout(function() {
            var inactive = angular.element(document.querySelector('.slidingTabs ul li.tab-active'));
            inactive.removeClass('tab-active');

            $ionicSlideBoxDelegate.slide(0, [900]); //---to return the slide indicator to 0 position;
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

            $ionicSlideBoxDelegate.slide(0, [900]); //---to return the slide indicator to 0 position;
            var active = angular.element(document.querySelector('.slidingTabs ul li:nth-child(8)'));
            active.addClass('tab-active');
            $ionicSlideBoxDelegate.slide(7, [900]);
        }, 300);
        $scope.toExtrasAnim = '';
    }


    // START --------- js for the progress bar ------------------
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

        $scope.stopOperation = function() {
            $timeout.cancel(timer1); //to cancel all timer above
            $timeout.cancel(timer2); //to cancel all timer above
            $timeout.cancel(timer3); //to cancel all timer above
            $timeout.cancel(timer4); //to cancel all timer above
            $timeout.cancel(timer5); //to cancel all timer above
            $timeout.cancel(timer6); //to cancel all timer above
            $timeout.cancel(timer7); //to cancel all timer above
            $timeout.cancel(timer8); //to cancel all timer above
            $timeout.cancel(timer9); //to cancel all timer above
            $timeout.cancel(timer10); //to cancel all timer above
            $timeout.cancel(timer11); //to cancel all timer above
            $timeout.cancel(timer12); //to cancel all timer above

            $timeout(function() {
                $scope.checkAnim = 'zoomOut';
                $scope.badgeAnim = 'zoomOut';
                $scope.saveDetailsAnim = 'zoomOut';
                $scope.saveToCardAnim = 'zoomOut';
                $scope.buttonCloseAnim = 'zoomOut';
                $scope.mainSectionWrapperAnim = 'zoomOutAnim';
                $scope.barAnim = 'zoomOut';
                $timeout(function() {
                    $scope.showMainSection = false;
                }, 400);
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
            }, 1100);
            $scope.count = 0;
            return;
        }

    }


    // -- START -- this is for progress bar controller
    // timer for progress bar
    $scope.count = 0;
    $scope.roundProgressData = {};

    $scope.startProgressBar = function myhandler() {

            if ($scope.count == 500) {

                $timeout(function() {
                    $scope.checkAnim = 'zoomOut';
                    $scope.badgeAnim = 'zoomOut';
                    $scope.saveDetailsAnim = 'zoomOut';
                    $scope.saveToCardAnim = 'zoomOut';
                    $scope.buttonCloseAnim = 'zoomOut';
                    $scope.mainSectionWrapperAnim = 'zoomOutAnim';
                    $scope.barAnim = 'zoomOut';
                    $timeout(function() {
                        $scope.showMainSection = false;
                    }, 400);
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
                    }, 1000);

                }, 1100);
                $scope.count = 0;
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
            // this is for progress bar
            $scope.roundProgressData = {
                label: total
            }
        }
        // Here I synchronize the value of label and percentage in order to have a nice demo
    $scope.$watch('roundProgressData', function(newValue, oldValue) {
        newValue.percentage = newValue.label / 500;
    }, true);
    // -- END --
    // END ------------------------------------------------------

});

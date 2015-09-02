'use strict';

/**
 * @ngdoc function
 * @name website.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the header
 */
 angular.module('website')
  .controller('HeaderCtrl', function ($scope) {
   
   	//Watch for collapse / change
    $scope.navbarStatusOpen = false;
    $scope.toggleNavbarStatus = function(){
    	$scope.navbarStatusOpen = !$scope.navbarStatusOpen;
    	console.log('CHANGED TO ',$scope.navbarStatusOpen);
    };

    $scope.menuLinkClick = function(){
    	//TO DO, track virtual page view
    	angular.element('.navbar .container').removeClass('navbar-open');
    	angular.element('.navbar-collapse').removeClass('in');
    	$scope.navbarStatusOpen = false;
    };
});
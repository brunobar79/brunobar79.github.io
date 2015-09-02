'use strict';

/**
 * @ngdoc function
 * @name website.controller:OpenSourceCtrl
 * @description
 * # OpenSourceCtrl
 * Controller of the website
 */
angular.module('website')
  .controller('OpenSourceCtrl', function ($scope, $sce, $rootScope) {

  	$scope.buttonType = ['star', 'watch', 'fork'];


  	$scope.getButtonUrl = function(type, repo){
  		var realSize = ($rootScope.screen.mobile?'medium':'large');
  		var url = 'https://ghbtns.com/github-btn.html?user=brunobar79&repo='+repo+'&type='+type+'&count=true&size='+realSize+'&v=2';
      	return $sce.trustAsResourceUrl(url);
  	};

});

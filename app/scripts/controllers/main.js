'use strict';

/**
 * @ngdoc function
 * @name website.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the website
 */
angular.module('website',['duScroll'])
  .controller('MainCtrl', function ($scope, $location, $document, $timeout) {
   
    $timeout(function(){
    	var path = $location.path().replace(/\//g,'');
    	if(path !== ''){
			//Check if there's a section like that
			var target = document.getElementById(path);
			if(target !== null){
				var offset = 0;
				
				console.log(offset);
				$document.scrollToElementAnimated(target,0);
			}
		}
    });
 
});

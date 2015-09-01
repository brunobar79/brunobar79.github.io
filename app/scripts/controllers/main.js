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
				console.log('Section exists',path);
				console.log(document.getElementById(path));
				var offset = 0;
				//Only about needs offset
				if(path === 'about'){
					offset = -30;
				}
				console.log(offset);
				$document.scrollToElementAnimated(target,offset);
			}
		}
    }); 
});

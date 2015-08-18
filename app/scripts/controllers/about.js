'use strict';

/**
 * @ngdoc function
 * @name website.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the website
 */
angular.module('website')
  .controller('AboutCtrl', function ($scope) {

  	$scope.polaroids = [
      	{
			'href':'https://www.flickr.com/photos/brunobar79/18559176835/in/album-72157654155275402/',
			'src':'//c1.staticflickr.com/1/368/18559176835_917d29d494.jpg',
			'title':'Rock!',
			'alt':'Rock!'
		},
		{
			'href':'https://www.flickr.com/photos/brunobar79/18372983809/in/album-72157654155275402/',
			'src':'//c1.staticflickr.com/9/8841/18372983809_05595c1c77.jpg',
			'title':'Skateboarding',
			'alt':'Skateboarding'
		},
		{
			'href':'https://www.flickr.com/photos/brunobar79/17938499013/in/album-72157654155275402/',
			'src':'//c1.staticflickr.com/1/359/17938499013_d93a7b243b.jpg',
			'title':'Dog Walking(?)',
			'alt':'Dog Walking(?)'
		},
		{
			'href':'https://www.flickr.com/photos/brunobar79/18373289768/in/album-72157654155275402/',
			'src':'//c1.staticflickr.com/9/8899/18373289768_01ac24858e_z.jpg',
			'title':'Pretty normal huh?',
			'alt':'Pretty normal huh?'
		}
    ];



    function init(){
	    var today = new Date();
	    var born  = new Date('02-01-1988');
	    var startDate = new Date('01-01-2004');

	    function tsToYears(ts){
	    	return Math.floor((ts) / 1000 / 60 / 60 / 24 / 365);
	    }

	    $scope.age = tsToYears(today - born);
	    $scope.experience = tsToYears(today - startDate);
    }

    init();

  });

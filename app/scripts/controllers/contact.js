'use strict';

/**
 * @ngdoc function
 * @name website.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the website
 */
angular.module('website')
  .controller('ContactCtrl', function ($http, $scope) {
    
    $scope.send = function(){
        
        $http({
            url: 'php/mail.php',
            method: 'POST',
            data: { 
                    'name' : $scope.name,
                    'email' : $scope.email, 
                    'message' : $scope.message 
            }
        })
        .then(function(response) {
                console.log(response);
                // success
                window.alert('Thanks for your email. I\'ll get back to you shortly!');
        }, 
        function(response) { // optional
                // failed
                console.log(response);
                window.alert('Oops! Something went wrong...');
        });
    };

});


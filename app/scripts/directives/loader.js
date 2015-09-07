'use strict';

angular.module('website')
    .directive('appLoading', function( $window ) {
        
        function link(scope, element, attributes) {
            angular.element($window).bind('load', function() {
                //Fadeout loader fast
                element.children(0).children(0).fadeOut('swing', function(){
                    //Fadeout bg
                    //Start the animation of the clouds
                    angular.element('#clouds').addClass('animate');

                    element.children(0).fadeOut(2000,function(){
                        element.remove();
                        scope = element = attributes = null;
                    });
                });                
            });             
        }

        return({
            restrict: 'C',
            link: link            
        });  

    }
);
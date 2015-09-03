angular.module('website')
	.directive('scroll', function($window, $rootScope){
			return {
				restrict:'A',
				scope:{
					'scroll':'@'
				},
				link: function(scope, element, attrs){

					var state = '';
					var threshold = parseFloat(scope.scroll);
					var el = angular.element(element);

					angular.element($window).bind("scroll", function() {
						if ( state !== 'not-fixed' && this.pageYOffset < threshold ) {
							el.removeClass('fixed');
							state = 'not-fixed';
						} else if ( state !== 'fixed' && this.pageYOffset >= threshold) {
							el.addClass('fixed');
							state = 'fixed';
						}
					});
				}
			};
		})

		;
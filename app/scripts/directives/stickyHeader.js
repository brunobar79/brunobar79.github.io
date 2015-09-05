'use strict';

angular.module('website')
	.directive('stickyHeader', function($window){
			return {
				restrict:'A',
				scope:{
					'stickyTrigger':'@'
				},
				link: function(scope, element){

					function getOffsetTop(elem) {
			            if (elem) {
			                var offset = 0;
			                while (elem) {
			                    offset += elem.offsetTop;
			                    elem = elem.offsetParent;
			                }
			                return offset;
			            }
			        }

			        function getBottomPosition(elem){
			        	if(elem){
			        		return getOffsetTop(elem) + elem.clientHeight;
			        	}else{
			        		return null;
			        	}
			        }

			        var state = '',
						targetPosition = null,
						sectionPositions = [],
						header = angular.element(element),
						lastScrollY     = 0,
					    ticking         = false,
					    sectionsTitles = document.getElementsByClassName('section-title'),
						lastHeaderText = '',
						FADE_DURATION = 150;

					function setupPositions(){
						targetPosition = getBottomPosition(document.getElementById(scope.stickyTrigger));
						for(var i = 0; i < sectionsTitles.length; i++){
							sectionPositions.push(getOffsetTop(sectionsTitles[i]));
						}
					}

					/**
					 * Callback for our scroll event - just
					 * keeps track of the last scroll value
					 */
					function onScroll() {
					    lastScrollY = $window.pageYOffset;
					    requestTick();
					}

					/**
					 * Calls rAF if it's not already
					 * been done already
					 */
					function requestTick() {
					    if(!ticking) {
					        requestAnimationFrame(update);
					        ticking = true;
					    }
					}

					/**
					 * Our animation callback
					 */
					function update() {
					    // grab the latest scroll position

				    	if(targetPosition === null){
							setupPositions();
						}
						if ( state !== 'not-fixed' && lastScrollY < targetPosition ) {
							header.removeClass('fixed');
							state = 'not-fixed';
						} else if ( state !== 'fixed' && lastScrollY >= targetPosition) {
							header.addClass('fixed');
							state = 'fixed';
						}
						var elementIndex = -1;
						var found = false;
						for(var i=0; i< sectionPositions.length; i++){
							var ePos = lastScrollY + element[0].clientHeight;
							if(ePos <= sectionPositions[i]){
								elementIndex = i-1;
								found = true;
								break;
							}
						}
						
						//Last section
						if(!found){
							elementIndex = sectionPositions.length - 1;
						}

						var headerText = '';
						if(elementIndex >= 0){
							headerText = sectionsTitles[elementIndex].innerText;
						}

						if(lastHeaderText !== headerText){
							var h2 = document.getElementById('header-section-name');
							angular.element(h2).addClass('fade-out');
							setTimeout(function(){
								var logo = angular.element(document.querySelector('.navbar-brand'));
								if(headerText===''){
									logo.removeClass('just-logo');
									logo.addClass('active');
								}else{
									logo.addClass('just-logo');
									logo.removeClass('active');
								}
								
								setTimeout(function(){
									//Set text
									h2.innerText = headerText;
									lastHeaderText = headerText;
									//Fade in
									angular.element(h2).removeClass('fade-out');
								},FADE_DURATION);

							},FADE_DURATION);
						}

					    // allow further rAFs to be called
					    ticking = false;
					}

					// only listen for scroll events
					window.addEventListener('scroll', onScroll, false);
					window.addEventListener('resize', function(){
						setupPositions();
					}, false);
				}
			};
		})

		;
'use strict';

/**
 * @ngdoc overview
 * @name website
 * @description
 * # website
 *
 * Main module of the application.
 */
angular
  .module('website', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ]).config(function ($locationProvider, $compileProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      $compileProvider.debugInfoEnabled(false);

  });




'use strict';

angular.module('angularSlidesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'leaflet-directive'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slide', {
        templateUrl: 'views/slide.html',
        controller: 'SlideListCtrl'
      })
      .when('/slide/:slideId', {
        templateUrl: 'views/slidedetail.html',
        controller: 'SlideDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

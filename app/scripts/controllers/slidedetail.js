'use strict';

angular.module('angularSlidesApp')
  .controller('SlideDetailCtrl', function ($scope, $routeParams) {
    $scope.slideId = $routeParams.slideId;
    console.log($routeParams);
  });

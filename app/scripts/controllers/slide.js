'use strict';

angular.module('angularSlidesApp')
  .controller('SlideListCtrl', function ($scope) {
    $scope.slides = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
'use strict';

angular.module('angularSlidesApp')
  .controller('SlideDetailCtrl', function ($scope, $routeParams) {
    $scope.slideId = $routeParams.slideId;
    console.log($routeParams);
    angular.extend($scope, {
                tiles: {
		  url: "//slides/55705_files/{z}/{x}_{y}.jpeg"
		}	
            });
  });

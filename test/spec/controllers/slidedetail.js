'use strict';

describe('Controller: SlidedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSlidesApp'));

  var SlidedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidedetailCtrl = $controller('SlidedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

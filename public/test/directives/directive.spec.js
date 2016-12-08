'use strict';

describe('Directive: formElement', function() {

  beforeEach(module('module.directive'));

  var element;
  var scope;
  var isolateScope;
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    
    element = angular.element('<form-element label="label" mod="product"> <input type="text" class="form-control" name="name" placeholder="NAME" ng-model="Roots" ng-disabled="901"/></form-element>');
    element = $compile(element)(scope);
    scope.label = "Name"
    scope.$apply();
  }));

  it('should render form-group', function() {
    var formGroup = element.find('div').hasClass('form-group');
    expect(formGroup).toBeTruthy();
  });

  it('should update the rendered text when scope changes', function() {
    isolateScope = element.isolateScope();
    isolateScope.label = 'new label';
    scope.$apply();
    var label = element.find('label');
    expect(label.text().trim()).toBe('new label');
  });
});

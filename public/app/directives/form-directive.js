'use strict';
(function() {
    angular.module('module.directive', [])
        .directive('formElement', function() {
                return {
            restrict: 'E',
            transclude: true,
            scope: {
                label : "@",
                model : "="
            },
            link: function(scope, element, attrs) {
                scope.disabled = attrs.hasOwnProperty('disabled');
                scope.required = attrs.hasOwnProperty('required');
                scope.pattern = attrs.pattern || '.*';
            },
            template: '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" >  {{label}}</label><div class="col-sm-7"><span class="block input-icon input-icon-right" ng-transclude></span></div></div>'
          };
        })

        .directive('onlyNumbers', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9,.]/g, '');

                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }
                        return transformedInput;
                    }
                    return undefined;
                }            
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
        });
})();
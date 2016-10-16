(function () {
    'use strict';
    angular.module('assig1App', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Eric";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };

});

})();

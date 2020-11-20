(function() {
'use strict';


angular.module('NameCalculator', [])
.controller('NameCalculatorController', NameCalculatorController);

function NameCalculatorController ($scope,
                                   $filter,
                                   $injector) {  //where the magic happens :D on Dependency Injections
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name); // get the total totalValue
    $scope.totalValue = totalNameValue;
  };

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  $scope.lower = function () {
    var upCase = $filter('lowercase');
    $scope.name = upCase($scope.name);
  };

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue
  };

//This shows the dependency Injections by mapping the method variables $scope, $filter & $injector to the services 
  console.log($injector.annotate(NameCalculatorController));

}

})();

(function() {
'use strict';


angular.module('NameCalculator', [])
.controller('NameCalculatorController', NameCalculatorController)
.filter('message', MessageFilter);


NameCalculatorController.$inject = ['$scope', '$filter', '$injector', 'messageFilter']; //Protecting Dependency Injection from Minification
function NameCalculatorController ($scope,
                                   $filter,
                                   $injector,
                                   messageFilter) {  //where the magic happens :D on Dependency Injections
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.message = "Irwin Herridge";

  $scope.replacedmessage = function (){
    var msg = $scope.message;
    msg = messageFilter(msg);
    return msg;
  }

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

function MessageFilter(){
  return function (input) {
    input = input || "";
    input = input.replace("Irwin", "I.");
    return input;
  };
}

})();

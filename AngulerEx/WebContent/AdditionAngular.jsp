<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">

EnterNumber1: <input type="number" ng-model="num1" placeholder="{{num1}}"><br>
EnterNumber2: <input type="number" ng-model="num2" placeholder="{{num2}}"><br>
<br>
<p>Result is: {{num1+num2}}</p>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.num1 = 10;
    $scope.num2 = 20;
});
</script>

</body>
</html>

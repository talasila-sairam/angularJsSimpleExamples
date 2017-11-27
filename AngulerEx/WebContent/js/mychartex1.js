angular.module("app", ["chart.js"]).controller("barCtrl", function ($scope) {
	alert("hello");
	$scope.myfun1=function()
	{
		alert("second");
	}
	 $scope.labels=['2004','2005','2006','2007','2008','2009','2010','2011'];
	 $scope.series = ['Series A', 'Series B'];

	  $scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
});
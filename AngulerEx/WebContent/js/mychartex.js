var myapp=angular.module("app", ["chart.js"])

myapp.service('change1', function() {
    var myhide1=true;
    alert(myhide1);
});
myapp.controller("LineCtrl",function ($scope,change1) {
	
  $scope.myfun2=function()
  {
	  $scope.myhide=!(change1.myhide);
  }
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
});
myapp.controller("barCtrl",function ($scope,change1) {
	$scope.myhide=change1.myhide1;
	alert($scope.myhide);
	$scope.myfun1=function()
	{
		alert("bar");
	}
	 $scope.labels=['2004','2005','2006','2007','2008','2009','2010','2011'];
	 $scope.series = ['Series A', 'Series B'];

	  $scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
});
              
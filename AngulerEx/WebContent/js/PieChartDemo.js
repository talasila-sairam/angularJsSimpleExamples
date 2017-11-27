var app=angular.module("app", ["chart.js"]);
app.controller("app-ctrl", function ($scope)
{
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  $scope.options={
		  cutoutPercentage:50
  };
  $scope.myfun=function(e)
  {
	  console.log(e);
	  alert("myfun");
	  for(var i=0;i<$scope.labels.length;i++)
		  {
		  if(e[0]._model.label == $scope.labels[i])
			  {
			  alert($scope.labels[i]);
			  }
		  }
  };
});
app.controller("app-ctrl1",function($scope)
			{
	  alert("inside controller");
	  alert("String"+String);
	  $scope.labels=["Audio","Video","Movies"];
	  $scope.data=[150,350,550];
	  $scope.options={
		cutoutPercentage:0	  
	  };
});
app.run(function($rootScope) {
    $rootScope.color = 'blue';
});


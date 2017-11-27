var abc=angular.module("app",[]);
abc.service("myservice",function(){
	 this.myFunc = function (x) {
		 alert("myfunservice");
	        return x.toString(16);
	    }
});
abc.controller("practicedemo",myfunction);
function myfunction($scope,$http){
	alert("hi");
	$scope.firstName='sai';
	$scope.getdata=function(){
		 /* $http.get("MyServlet").then(function (response) {
			 console.log(response);
			 console.log(response.data);
			 alert(response);
		        //$scope.myWelcome = response.data;
		    }); */
		$http({
		    method : 'POST',
		    url : 'MyServlet',
		    data : {test: 'sai'},
		    headers: {
		    	   'Content-Type': 'application/json'
		    	 }
		}).success(function(response) {
		    console.log(response);
		    alert(response);
		});
	}
}
var abc1=angular.module("app1",['app']).config(['$provide', function($provide) {
	
	//Provider Provided Service
	  $provide.factory('serviceId', function() {
		  return function(msg){
		    alert("inside provide  "+msg);  
		  }
		  });
	  }]);

//Controller Created by taking Another Module Service as Dependency

abc1.controller("practicedemo1",['$scope','myservice','serviceId',function ($scope,myservice,serviceId){
	alert("hello");
	
	//Watches any changes to Scope
	 $scope.myVar="This Watches";
	 $scope.$watch('myVar', function() {
	        alert('hey, myVar has changed!');
	    });
	serviceId("of factory");
	$scope.bdf=function(){
		alert("ppp");
		myservice.myFunc(20);	
	}
}]);
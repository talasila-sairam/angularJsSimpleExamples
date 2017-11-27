<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="js/ag-grid.min.js"></script> 
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<link rel="stylesheet" href="css/frameworks/theme-blue.css">
<script src="js/firstEx.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>
<body ng-app="example" ng-controller="exampleCtrl" center>
   <!--  <div id="myGrid"  style="height: 200px; border:1px solid;"  class="ag-fresh" ></div> -->
   <div ag-grid="gridOptions" class="ag-blue" style="border : 1px solid black;height: 500px;width:100%"></div>
   <div>
    <button ng-click="myfun()" ng-model="myattr">CLICK</button>
    <p>{{myattr}}</p>
   </div>
</body>
</html>
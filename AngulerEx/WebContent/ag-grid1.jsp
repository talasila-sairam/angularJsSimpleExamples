<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="js/ag-grid.min.js"></script>
<link rel="stylesheet" href="css/framework/theme-fresh.css">
<script src="js/ak.js"></script>
<body>
</head>
<body ng-app="example" >
   <div ng-controller="exampleCtrl">
      <div id="myGrid"  style="height: 200px; border:1px solid;"  class="ag-fresh" ></div>
   </div>
</body>
</html>
//agGrid.initialiseAgGridWithAngular1(angular);
var app = angular.module("example", []);
app.controller("exampleCtrl", function($scope) {
	$scope.columnDefs = [

	                     {headerName: "Make", field: "make", editable:true, pinned:"left", width:100, filter:"number"},
	                     {headerName: "Model", field: "model"},
	                     {headerName: "Price", field: "price", filter:"number"},
	                     {headerName: "Make", field: "make"},
	                     {headerName: "Model", field: "model"},
	                     {headerName: "Price", field: "price"},
	                     {headerName: "Make", field: "make"},
	                     {headerName: "Model", field: "model"},
	                     {headerName: "Price", field: "price"}
    ];

	$scope.rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

	$scope.gridOptions = {
        columnDefs: $scope.columnDefs,
        rowData: $scope.rowData, 
        debug: true,
        enableColResize: true,
    };
    
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, $scope.gridOptions);
    
});
agGrid.initialiseAgGridWithAngular1(angular);
var app = angular.module("example", ["agGrid"]);
app.controller("exampleCtrl", function($scope) {
	$scope.columnDefs = [
	                       {
	                    	  headerName: "GroupA",
	                    	  marryChildren:true,
	                    	  groupId: "GroupA",
	                            children:
	                        	   [
	                                 {headerName: "athlete1", field: "athlete1", width: 150, filter: 'text'},
	                                 {
	                                	 headerName:"GroupB",
	                                     marryChildren:true,
	                                     groupId:"GroupB",
	                                     children:
	                                    	 [
	                                    	    {headerName:"age1",field:"age1",width: 90 ,filter:'text'},
	                                    	    {
	                                    	       headerName:"GroupC",
	                                    	       marryChildren:true,
	                                    	       groupId:"GroupC",
	                                    	       children:
	                                    	    	   [
	                                    	    	    {headerName:"country1", field:"country1",width: 110 ,filter:'text'},
	                                    	    	      {
	                                    	    	    	headerName:"GroupD",
	                                    	    	    	marryChildren:true,
	                                    	    	    	groupId:"GroupD",
	                                    	    	    	children:
	                                    	    	    		[
	                                    	    	    		 {headerName:"sports1",field:"sports1" ,width:100,filter:'text'},
	                                    	    	    		 {
	                                    	    	    			 headerName:"GroupE",
	                                    	    	    			 marryChildren:true,
	                                    	    	    			 groupId:"GroupE",
	                                    	    	    			 children:
	                                    	    	    				 [
	                                    	    	    				  {headerName:"total1",field:"total1",width:100,filter:'text'},
	                                    	    	    		           {
	                                    	    	    					  headerName:"GroupF",
	                                    	    	    					  marryChildren:true,
	                                    	    	    					  groupId:"GroupF",
	                                    	    	    					  children:
	                                    	    	    						  [
                                                                                     {headerName:"gold1",field:"gold1",width:100,filter:'text'},
                                                                                     {
                                                                                     headerName:"GroupG",
                                                                                     marryChildren:true,
       	                                    	    	    					     groupId:"GroupG",
       	                                    	    	    					     children:
       	                                    	    	    					    	 [
                                                                                           {headerName:"silver1",field:"silver1",width:100,filter:'text'},
                                                                                           {
                                                                                           headerName:"GroupH",
                                                                                           marryChildren:true,
             	                                    	    	    					     groupId:"GroupH",
             	                                    	    	    					     children:
             	                                    	    	    					    	 [
                                                                                                    {headerName:"bronze",field:"bronze",width:100,filter:'text'}
             	                                    	    	    					    	  ]
                                                                                           },
                                                                                           {headerName: "silver2", columnGroupShow: 'open', field: "silver2", width: 110}
       	                                    	    	    					    	  ]
                                                                                     },
                                                                                     {
                                                                                    	 headerName: "gold2", columnGroupShow: 'open', field: "gold2", width: 110
                                                                                    	 }
	                                    	    	    						   ]
	                                    	    	    		           },
	                                    	    	    		           {headerName: "total2", columnGroupShow: 'open', field: "total2", width: 110}
	                                    	    	    		           
	                                    	    	    				  ]
	                                    	    	    		 },
	                                    	    	    		 {headerName: "sports2", columnGroupShow: 'open', field: "sports2", width: 110}
	                                    	    	    		 ]
	                                    	    	      },
	                                    	    	      {headerName: "country2", columnGroupShow: 'open', field: "country2", width: 110}
	                                    	       ]
	                                    	    },
	                                    	    {headerName: "age2", columnGroupShow: 'open', field: "age2", width: 110}
	                                    	 ]
	                                 },
	                                 {headerName: "athlete2", field: "athlete2", width: 150, filter: 'text'}
	                           ]
	                }
    ];

	$scope.rowData = [
	                  {
	                	  "Athlete Details":
	                    [
	                      {Name: "sai", age: "23", Country: "india"},
	                      {Name: "sai", age: "23", Country: "india"},
	                      {Name: "sai", age: "23", Country: "india"}
	                    ]
	                  },
	                  {
	                	  "Sports Results":
	                		  [
	                		  {Sport:"cricket",Total:"10",Gold:"5",Silver:"3",Bronze:"2"},
	                		  {Sport:"cricket",Total:"10",Gold:"5",Silver:"3",Bronze:"2"},
	                		  {Sport:"cricket",Total:"10",Gold:"5",Silver:"3",Bronze:"2"}
	                		  ]
	                  }
    ];
	 $scope.defaultColDef={
	        // make every column editable
	        editable: true,
	        // make every column use 'text' filter by default
	        filter: 'text'
     };
	$scope.gridOptions = {
        columnDefs: $scope.columnDefs,
        rowData: $scope.rowData, 
        defaultColDef:$scope.defaultColDef,
        debug: true,
        enableColResize: true,
        enableFilter:true,
        suppressMenuHide:false,
        enableSorting:true,
        sortingOrder:false,
        enableRangeSelection:false,
        rowHeight: 37,
        rowSelection: 'single',
        onRowClicked: function(event) { /*alert("row clicked");*/console.log('a row was clicked'); },
        onColumnResized: function(event) { /*alert("column resized");*/console.log('a column was resized'); },
        onGridReady: function(event) { /*alert("grid is ready");*/console.log('the grid is now ready'); },
        suppressMovableColumns:false,
        suppressColumnMoveAnimation:false,
        unSortIcon:true,
        suppressRowClickSelection:false,
        enableGroupEdit:true,
        singleClickEdit:true
    };
	 
	/*$scope.gridOptions.api.addEventListener('rowClicked', myRowClickedHandler);
	//$scope.gridOptions.columnApi.sizeColumnsToFit();
	 $scope.myRowClickedHandler=function() 
	{
		alert("row was clicked");
	    console.log('the row was clicked');
	}*/

	$scope.myfun=function()
	{
		$scope.myattr="this is from myfunction";
		return alert("button clicked");
	}
	/*alert("after grid options");
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, $scope.gridOptions);*/
    
});


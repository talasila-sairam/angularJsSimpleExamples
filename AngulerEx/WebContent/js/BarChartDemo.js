$(document).ready(function(){
	var ctx=document.getElementById("mycanvas");
var data = {
		labels: ["AE123", "AE124", "AE125", "AE126", "AE127", "AE128", "AE129"],
    datasets: [
        {
        	 type: 'bar',
            label: "2016",
            backgroundColor: "black",
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [55, 45,70,85,60,45,30]
        },
        {
        	 type: 'bar',
            label: "2017",
            backgroundColor: "red",
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};
var myBarChart =new Chart(ctx,{
   type:'bar',
    data: data,
   options:{
	   scaleShowVerticalLines: false,
	   scales: {
		   gridLines: {
			   show: true
           },
	        xAxes: [{
	        	 stacked: false,
	        	 barPercentage: 1.0,
	        	 labelFontSize:50
	        }],
	        yAxes: [{
                /*ticks: {
                    stepSize: 50
                }*/
            }]
	    }

   }
});
$("#mycanvas").click( 
        function(evt){
	alert("hi");
	//var activePoints = myBarChart.getBarsAtEvent(evt); 

    var activePoints = myBarChart.getElementsAtEvent(evt);
    console.log(activePoints);
    alert(activePoints);
    for(var i=0;i<activePoints.length;i++)
    	{
    	alert("for");
    	var arr1=activePoints[i];
       if (arr1._model.label == "AE123") {
    	   alert("AE123");
    	   console.log(arr1._model.label);
       }
    	}
});

});
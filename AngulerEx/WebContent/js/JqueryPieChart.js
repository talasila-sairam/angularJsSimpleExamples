$(document).ready(function(){
	alert("hi");
	var lab={"data":["FCIO", "FAUD", "FCIN","F3DA","FACC","FALB","FALC","FANM"]};
	var ctx=document.getElementById("mycanvas1");
	alert(lab['data']);
    var data = {
    labels: lab['data'],
    datasets: [
        {
            data: [300, 50, 100, 300, 50, 100, 300, 50],
            backgroundColor: [
                        "red",
                        "blue",
                        "green",
                        "black",
                        "yellow",
                        "orange",
                        "gray",
                        "silver"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};
    Chart.defaults.global.responsive=true;
    var myDoughnutChart =new Chart(ctx,{
    	   type:'doughnut',
    	    data: data,
    	    options:{
    	    	
    	    }
    });
    $("#mycanvas1").click(function(evt)
    		{
                var activePoints = myDoughnutChart.getElementsAtEvent(evt);
                console.log(activePoints);
                alert(activePoints[0]._model["label"]);
                myfunction(activePoints[0]._model["label"]);
            }
        );
    var myDoughnutChart1;
    function myfunction(String)
    {
    	//$("#mycanvas2").remove();
   	 //$("#div2").append('<canvas id="mycanvas2"></canvas>');
    	alert(String);
    	var ctx=document.getElementById("mycanvas2");
        var data = {
        labels: ["A","B","C","D","E"],
        datasets: [
            {
                data: [300,300,300,300,300],
                backgroundColor: [
                    "red",
                    "blue",
                    "green",
                    "black",
                    "yellow",
                    "orange"
                    
                ],
                hoverBackgroundColor: [
              "red",
              "blue",
              "green",
               "black",
              "yellow",
              "orange"
                ]
            }]
    };
        alert("hi1");
        Chart.defaults.global.responsive=true;
        Chart.defaults.global.animation.easing='easeInOutBounce';
        myDoughnutChart1=new Chart(ctx,{
        	   type:'pie',
        	    data: data,
        	    options:{
        	    	animation:{
        	        	animateRotate:false,
        	            animateScale:true
        	        },
        	    	cutoutPercentage:0
        	    }
        });
    }
    $("#mycanvas2").click(function(evt)
    		{
    	alert("inside second click");
                var activePoints = myDoughnutChart1.getElementsAtEvent(evt);
                console.log(activePoints);
                alert(activePoints[0]._model["label"]);
                myfunction(activePoints[0]._model["label"]);
            }
        ); 
});
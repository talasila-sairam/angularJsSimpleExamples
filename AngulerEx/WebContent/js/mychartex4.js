$(document).ready(function(){
	var ctx=document.getElementById("mycanvas");
	var data = {
		    labels: [
		        "Download Sales",
		        "In-Store Sales",
		        "Mail-Order Sales"
		    ],
		    datasets: [
		        {
		            data: [300, 50, 100],
		            backgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ],
		            hoverBackgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ]
		        }]
		};
Chart.defaults.global.defaultFontSize=14;
Chart.defaults.global.responsive=true;
Chart.defaults.global.responsiveAnimationDuration=10;
Chart.defaults.global.legendCallback=function(chart){alert(chart);};
Chart.defaults.global.padding=10;
Chart.defaults.global.title.display=true;
Chart.defaults.global.title.display.text="Custom Chart Title";
Chart.defaults.global.title.fullWidth=true;
Chart.defaults.global.legend.display=true;
Chart.defaults.global.legend.position='top';
Chart.defaults.global.legend.onClick=function(){alert("legend")};
Chart.defaults.global.tooltips.enabled=true;
Chart.defaults.global.legend.labels.boxWidth=40;
Chart.defaults.global.legend.fullWidth=true;
Chart.defaults.global.tooltips.xPadding=10;
Chart.defaults.global.tooltips.intersect=true;
Chart.defaults.global.tooltips.titleFontSize=20;
Chart.defaults.global.tooltips.backgroundColor='#FF6384';
Chart.defaults.global.tooltips.titleSpacing=50;
Chart.defaults.global.tooltips.titleMarginBottom=10;
Chart.defaults.global.tooltips.titleFontColor='#FF6384';
Chart.defaults.global.tooltips.displayColors=true;
Chart.defaults.global.hover.intersect=true;
Chart.defaults.global.hover.onHover=function(){}
Chart.defaults.global.animation.duration=1000;
Chart.defaults.global.animation.easing='easeInOutBounce';
Chart.defaults.global.animation.onComplete=function(){};
Chart.defaults.global.elements.arc.borderColor='black';
//Chart.defaults.global.elements.arc.borderWidth=5;
//Chart.defaults.global.elements.arc.borderColor='#FFCE56';



var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        animation:{
        	animateRotate:false,
            animateScale:true
        },
     title: {
                display: true,
                text: 'Dougnut Chart'
            },
        cutoutPercentage:50,
        	tooltips: {
        	    callbacks: { 
        	    	beforeTitle: function(tooltipItem,data) {
        	    	  console.log(tooltipItem);
        	    	  console.log(data);
        	        /*var datasetLabel = data.datasets[0].data[0];
        	        alert(datasetLabel);
        	        var label = data.labels[tooltipItem.index];
        	        return datasetLabel + ': ' + label;*/
        	      }
        	    }
        	  }

    }
   });
$("#mycanvas").click( 
        function(evt){
        	myDoughnutChart.data.datasets[0].backgroundColor[0]="#36A2EB";
            var activePoints = myDoughnutChart.getElementsAtEvent(evt);
            console.log(activePoints);
            alert(activePoints[0]._model["label"]);
            if(activePoints[0]._model["label"]=='Download Sales')
            {
            	 $("#mycanvas").remove();
            	 $("#div1").append('<canvas id="mycanvas"></canvas>');
            	 download();
            	
            	setInterval(function(){download();},1000);
            	
            }
           else if(activePoints[0]._model["label"]=='In-Store Sales')
            {
        	   storesales();
            }
           else
            {
        	   mailordersales();
            }
        }
    ); 
function download()
{
	
	//$("#mycanvas").remove();
	var ctx1=document.getElementById("mycanvas");
	
	var data = {
		    labels: ["January", "February", "March", "April", "May", "June", "July","aug"],
		    datasets: [
		               {
		                   label: "My First dataset",
		                   fill: false,
		                   lineTension: 0.1,
		                   backgroundColor: "rgba(75,192,192,0.4)",
		                   borderColor: "rgba(75,192,192,1)",
		                   borderCapStyle: 'butt',
		                   borderDash: [],
		                   borderDashOffset: 0.0,
		                   borderJoinStyle: 'miter',
		                   pointBorderColor: "rgba(75,192,192,1)",
		                   pointBackgroundColor: "#fff",
		                   pointBorderWidth: 1,
		                   pointHoverRadius: 5,
		                   pointHoverBackgroundColor: "rgba(75,192,192,1)",
		                   pointHoverBorderColor: "rgba(220,220,220,1)",
		                   pointHoverBorderWidth: 2,
		                   pointRadius: 1,
		                   pointHitRadius: 10,
		                   data: [65, 59, 80, 81, 56, 55, 40],
		                   spanGaps: false,
		               }
		           ]
		};
	var myLineChart = new Chart(ctx1,{
	    type: 'line',
	    data: data
	});
}
});
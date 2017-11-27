$(document).ready(function(){
	var ctx=document.getElementById("mycanvas");
	var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
    	 labels:["FCIO", "FAUD", "FCIN","F3DA","FACC","FALB","FALC","FANM"],
        datasets: [{
        	backgroundColor:'rgba(54, 162, 235, 0.2)',
        	borderColor:'rgba(255, 206, 86, 0.2)',
        	fill:true,
        	lineTension:0.1,
        	borderWidth:3,
        	borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.8,
            borderJoinStyle: 'miter',
        	pointBorderColor:'black',
        	pointBackgroundColor:'blue',
        	pointHitRadius:10,
        	pointHoverRadius:10,
        	pointStyle:'dash',
        	showLine:true,
        	steppedLine:false,
        	spanGaps:true,
        	data: [300, 50, 100, 300, 50, 100, 300, 0]
        }]
    },
    options: {
    	scales: {
    		type:'linear',
    		scaleLabel:{
    			fontSize:5
    		},
    		xAxes: [{
    			gridLines: {
                    display:true,
                    color:'blue',
                    drawTicks:true,
                    borderDashOffset:10,
                    drawOnChartArea:true,
                    tickMarkLength:12
                },
                ticks: {
                    fontSize: 10,
                    fontColor:'black',
                    minRotation:0,
                    reverse:true
                }
            }],
            yAxes: [{
            	stacked: true,
            	gridLines: {
                    display:true,
                    color:'blue',
                    drawTicks:true,
                    tickMarkLength:8
                },
                ticks: {
                    fontSize: 10,
                    fontColor:'black',
                    mirror:false,
                    padding:10,
                    reverse:false
                }

            }]
        }
    }
});
	canvas.onClick(function(event){
		alert(event);
		console.log(event)
		var activePoints = scatterChart.getPointsAtEvent(event);

//		var activePoints = scatterChart.getElementsAtEvent(event);
		alert(activePoints);
		console.log(activePoints);
	});
});
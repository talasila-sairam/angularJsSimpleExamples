angular.module("app", ["chart.js"]).controller("DoughnutCtrl", function ($scope) 
  {
 //alert("hi");
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [350, 350, 100];
  $scope.options = {
		  onHover:function()
		  {alert("sai")},
    cutoutPercentage:0,
    animation:{
     animateScale:true,
     animateRotate:true,
             animateScale:true,
             percentageInnerCutout : 70
    },
    legend: {
    	display: true,
    /* text: String,
          fillStyle: Color,
          hidden: Boolean,
          lineCap: String,
          lineDash: Array[Number],
          lineDashOffset: Number,
          lineJoin: String,
          lineWidth: Number,
          strokeStyle: Color,
          pointStyle: String,*/
     generateLabels:function(chart)
     {
    alert(chart);  
    alert("hi");
     },
     labels: {
        lineWidth: 30
        },
        onHover:function(e,p){
         if(p.text=='Download Sales')
          {
          alert('Download Sales');
          myfun();
          }
         else if(p.text=='In-Store Sales')
          {
          alert('In-Store Sales')
          }
         else
          {
          alert('mail Sales');
          }
         alert(p.text);
            console.log(p.text);
        }
          }
  }
});



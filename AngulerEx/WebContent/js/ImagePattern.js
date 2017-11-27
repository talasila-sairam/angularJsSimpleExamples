$(document).ready(function()
		{
	alert("hi");
var img = new Image();
//img.src = "css/framework/abc.jpg";
img.onload = function() {
	alert("hello");
	 var ctx=document.getElementById("mycanvas");
    var fillPattern = ctx.createPattern(img, "repeat");

    var chart = new Chart(ctx, {
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: fillPattern
            }]
        }
    })
}
});
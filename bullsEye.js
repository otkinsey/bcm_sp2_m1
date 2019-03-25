var sliderModule = (function(win, doc) {

    win.onload = init;

    // canvas and context variables
    var canvas;
    var context;

    // center of the pattern
    var centerX, centerY;


    function init() {
        
            canvas = doc.getElementById("testCanvas");
            context = canvas.getContext("2d");

            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            
            // draw the initial pattern
            drawPattern();
    }


    // called whenever the slider value changes
    function drawPattern() {
        // clear the drawing area
        // context.clearRect(0, 0, canvas.width, canvas.height);

        // get the current bandWidth
        var radius = 200;
        var bandWidth = document.getElementById('bandWidth').value;
        console.log('DIAG: bandwidth: '+bandWidth);
       

        

        // an array to save radius values based on 
        // current bandWidth values
        var radiusArray = [];

        // var to save current value of while loop
        var radiusValue = radius;
        
        // loop to set radius values based on bandwidth
        while(radiusValue>1){
            // set radius
            console.log(radiusValue); 
            radiusArray.push(radiusValue);  
            radiusValue = radiusValue-bandWidth;         
        }

        // draw a circle for each value
        // in radiusArray
        for(var r in radiusArray){
            // set fill color based on conditional test
            // for even or odd values.
            if(parseInt(r)%2 === 0) {
                context.fillStyle = '#FF0000';
            }
            else {
                context.fillStyle = '#2210f3';
            }
            context.beginPath();
            context.arc(centerX, centerY, radiusArray[r], 0, 2 * Math.PI);
            context.fill();
            context.closePath();  
        }
       
    }

    return {
        drawPattern: drawPattern
    };

})(window, document);
// });







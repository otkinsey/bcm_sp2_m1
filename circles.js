window.onload = init;

function init(){
        // canvas and context variables
        var canvas;
        var context;
        // randomize hexadecimal string for fill color
        function randomizeColor(){
            
            var possible = ["#1e69e2","#e21ed9","#39e21e","#f180eb","#9c27b0"];
            hexString = possible[Math.floor((Math.random()/4)*10)];  
            console.log("DIAG: circle.js - randomizeColor: "+hexString);
            return hexString;          
        }


        
    
       
        canvas = document.getElementById("circleCanvas");
        context = canvas.getContext("2d");

        // called whenever the slider value changes
        canvas.onclick = function (e) {
            // center of the pattern
            var centerX, centerY;
    
            var radius = 50;
                    
            centerX = e.clientX - e.target.offsetLeft;
            centerY = e.clientY - e.target.offsetTop;

            // centerX = canvas.width / 2;
            // centerY = canvas.height / 2;
            
;

            // randomize hexadecimal color code

            // an array to save radius values based on 
            context.fillStyle = randomizeColor();
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            
            context.fill();
            context.closePath();    
            console.log("x: "+centerX+" y: "+centerY);
            console.log("context: "+context);   
    }
}







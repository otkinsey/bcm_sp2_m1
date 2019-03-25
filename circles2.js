/**
 * - erase ratio attribute
 */

window.onload = init;

function init(){
        // canvas and context variables
        var body = document.body;
        body.style = `height:100vh`;
        var context;
        var canvasArray = [];

        // randomize hexadecimal string for fill color
        function randomizeColor(){
            
            var possible = ["#1e69e2","#e21ed9","#39e21e","#f180eb","#9c27b0"];
            hexString = possible[Math.floor((Math.random()/4)*10)];  
            console.log("DIAG: circle.js - randomizeColor: "+hexString);
            return hexString;          
        }

        // called whenever the slider value changes
        body.onclick = function (e) {
            
            var canvasX, canvasY, centerX, centerY;
            var radius = 50; 
            var canvas = document.createElement("canvas");
            canvasX = e.clientX-(radius);
            canvasY = e.clientY-(radius/2);
            
            // set canvas width and center point
            canvas.width = radius*2;
            canvas.height = radius*2;
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;

            // set position of new canvas
            canvas.style = `border:1px dotted grey;position:absolute;left:${canvasX}px;top:${canvasY}px;`;
            
            // set id of new canvas and add to canvasArray
            // canvas.id = `${canvasArray.length+1}`;
            var canvasNumber = (canvasArray.length) ? Math.max(...canvasArray) : 0;            
            var canvasRatio = canvas.offsetLeft/canvas.offsetTop; 
            canvasArray.push(canvas.id);
            e.target.appendChild(canvas);
            canvas.setAttribute('ratio', canvasRatio);
           
            console.log("canvasNumber: "+canvasNumber);
            
            
            canvasNew = document.getElementById(canvas.id);
            context = canvasNew.getContext("2d");


            // an array to save radius values based on 
            context.fillStyle = randomizeColor();
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            
            // loop through all existing circles to identify and delete overlaps
            canvasArray.map((i)=>{
                
                var canvases = document.getElementsByTagName("canvas");
                var currentCanvas = document.getElementById(canvasArray[canvasArray.length-1]);
                document.getElementById(i).removeAttribute('current');
                currentCanvas.setAttribute("current",true);
                // console.log("DIAG: circles.js - i: "+i);
                
                var currentX = currentCanvas.offsetLeft;
                var currentY = currentCanvas.offsetTop;
                console.log("Diag - current canvas x: "+currentCanvas.offsetLeft+" y: "+currentCanvas.offsetTop);
                for(c of canvases){   
                    if(c.id == currentCanvas.id){
                        console.log('skipping');
                        continue;
                    }                                  
                    else if((Math.abs(currentX-c.offsetLeft)<100) && (Math.abs(currentY-c.offsetTop)<100)){
                        // test overlap X
                        console.log(`currentX: ${currentX} canvasX: ${c.offsetLeft}`);
                        console.log(currentX-c.offsetLeft);

                        // test overlap Y
                        console.log(`currentY: ${currentY} canvasY: ${c.offsetTop}`);
                        console.log(currentY-c.offsetTop);
                        console.log(`currentCanvas: ${currentCanvas.id} overlaps with ${c.id}`);

                        // delete over lapping canvas
                        canvasArray.splice(canvasArray.indexOf(c.id),1);
                        console.log("canvas id: "+c.id+" index: "+canvasArray.indexOf(c.id));
                        body.removeChild(c);   
                        canvasNumber = Math.max(...canvasArray);
                        console.log("number: "+canvasNumber);                    
                    }

                }
                
            })

            context.fill();
            context.closePath();    
            console.log("canvasArray: "+canvasArray);   
    }
}







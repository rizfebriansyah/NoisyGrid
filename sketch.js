var stepSize = 20;

function setup() {
    createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
    background(125);
    
    colorGrid();
    compassGrid();

    //make rotation speed dependent on mouseX 
    //var s = map(mouseX,0,width,10,0);
}

///////////////////////////////////////////////////////////////////////
function colorGrid(){
    // your code here
    noStroke(0);
    let yellow = color(255, 200, 0);
    let blue = color(0, 50, 230);  
    for(var x=0;x<25;x++){
        for(var y=0;y<25;y++){
            var xPos = x*stepSize;
            var yPos = y*stepSize;
            var scale = 0.002;
            var tX = (xPos+frameCount)*scale;
            var tY = (yPos+frameCount)*scale;
            var t = noise(tX,tY);
            var c = lerpColor(yellow,blue,t);
            fill(c);
            rect(xPos,yPos,stepSize,stepSize)
        }
    }
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
    // your code here
    for(var x=1;x<=25;x++){
        for(var y=1;y<=25;y++){
            stroke(0);
            push();
            translate(x*stepSize-stepSize/2,y*stepSize+stepSize/2);
            var xPos = x*stepSize;
            var yPos = y*stepSize;
            var scale = 0.002;
            var tX = (xPos+frameCount)*scale;
            var tY = (yPos+frameCount)*scale;
            var t = noise(tX,tY);
            var c = map(t,0,1,0,720);
            rotate(radians(c));
            line(0,stepSize/2,0,-stepSize/2);
            //ellipse(0,0,10,10);

            pop();
        }
    }
}

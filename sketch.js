var drawing=[];
var path=[];

function setup(){
    var canvas = createCanvas(500,500);
    canvas.mousePressed(start);
    this.buttonSave=createButton('save');
}
function draw(){
     background(51);
     if(mouseIsPressed){
     var point={x:mouseX,y:mouseY}
     path.push(point)
     }
     noFill();
     strokeWeight(10);
     stroke("blue");
     for(var i=0 ; i<drawing.length;i++){
         var path1=drawing[i];
         beginShape();
         for(var j=0;j<path1.length;j++){
             vertex(path1[j].x,path1[j].y);
         }
         endShape();
     }
    
    
}
function start(){
    path=[];
    drawing.push(path);
}
 function display() {
     this.buttonSave.display();
    this.buttonSave.position(displayWidth/2,displayHeight/2);
}



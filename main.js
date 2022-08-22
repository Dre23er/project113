function preload(){

}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
}


function draw(){

 fill(255,0,0)          
 ellipse(50,50,50,50);

    fill(255,0,0)    
    ellipse(50,350,50,50);

    fill(255,0,0)    
    ellipse(350,350,50,50);

    fill(255,0,0)    
    ellipse(350,50,50,50);
        
    fill(255,0,0)    
     ellipse(50,50,50,50);

     fill(0,255,0)
    rect(25,55,50,290,300);

    fill(0,255,0)
    rect(325,55,50,290,300);

    fill(0,255,0)
    rect(50,25,300,50,55);

    fill(0,255,0)
    rect(50,325,300,50,55);

}

function take_snapshot(){
save("i_love_food.png");
}
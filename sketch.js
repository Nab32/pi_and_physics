let block1;
let block2;
let count=0;
let stepCount=1000000;
let digits=6;


function setup() {
  createCanvas(400, 400);
  block1= new Block(100,20,0,1);
  block2= new Block(200,50,-2/stepCount,(100**(digits-1)));
}

function draw() {
  background(0);
  
  for (let i=0; i<stepCount; i++){
    if (block1.collisionwithblock(block2)){
      block1.bouncing(block2);
      count+=1;
    }
    
    if (block1.collisionwithwall()){
      block1.v=-block1.v;
      count+=1;
    }
    block1.update();
    block2.update();
  }
  block1.show();
  block2.show();
  textSize(32);
  text("collisions= " + count,0,30);
  text("digits = "+digits,0,65)
}

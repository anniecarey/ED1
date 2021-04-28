function setup() {
  createCanvas(innerWidth, 2* (innerWidth));
  strokeWeight (0.4);
  stroke(0,0,128);
  background (240,230,250)
  frameRate(1);

}

function draw() {
  translate (30,30);
  var num =20;
  var shift =12;
  var width= innerWidth-2*30;
  var length= innerWidth;
  var sideLen = (width/num);
  var space = 2;

  for (var x=0; x< num*sideLen; x= x+sideLen){
    for(var y=0; y <num*sideLen; y=y+sideLen ){
      fill(random(190,255),random(180,255),random(170,255),200);
      quad(x+ random (-shift,shift)+space,y+ random (-shift,shift)+space,x+sideLen+ random (-shift,shift)-space,y+ random (-shift,shift)+space,x+sideLen+ random (-shift,shift)-space,y+sideLen+ random (-shift,shift)-space,x+ random (-shift,shift)+space,y+sideLen+ random (-shift,shift)-space);


}
    }

}

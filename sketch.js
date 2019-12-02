let angle = 0;
let logo;
var cnv;

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight, WEBGL);
}


// function preload(){
//   logo = loadModel('tngtng_logo_new.obj');
// }


function setup() {
  cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  cnv.position(0,0);
  cnv.style('z-index', '-1');
  logo = loadModel('./sources/tngtng_logo_new.obj');
  //canvas.parent('sketch-holder');
}

function draw() {
  scale(2.75);
  background(255);
  strokeWeight(0.7);
  rotateX(180);
  rotateX(angle * 0.5);
  rotateZ(angle * 0.25);
  model(logo);
  angle+= 0.0025;
}

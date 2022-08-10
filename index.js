// import robotJS library -- saved to variable

var robot = require('robotjs');


function main(){
  var counter = 0;
console.log("Starting...");

while (true){
  robot.moveMouse(950, 740);
    robot.mouseClick();
    counter++;
    console.log("Counter now at : " + counter);
    sleep(3350);
    if (counter >= 45){
      break;
    }
}
console.log("Done!");

}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();
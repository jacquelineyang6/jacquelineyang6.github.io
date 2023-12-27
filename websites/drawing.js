var canvas;
var draw;
const UNIT = 5;
window.onload = init; // when the window is loaded, call the init function
function init() {
    //canvas variable is set to the element in html that has the id canvas
    canvas = document.getElementById("mycanvas");
    //associating the drawing mechanism to the 2d
    draw = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;
    // draw.fillRect(20,60,50,50);
    // draw.fillStyle = "red";
    // draw.fillRect(60,20,50,50);
    drawMario(4,0,0);
}
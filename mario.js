function drawMario(type, x, y) {
    draw.save();
    draw.translate(x*UNIT,y*UNIT);
    if (type == 1) {
        drawStanding();
    } else if (type == 2) {
        drawWalking1();
    } else if (type == 3) {
        drawWalking2();
    } else if (type == 4) {
        drawWalking3();
    }
    draw.restore();
}
function drawStanding() {
    // Head
    draw.fillStyle = "#FF0000"; // Red
    draw.fillRect(3*UNIT, 0, 5*UNIT, UNIT);
    draw.fillRect(2*UNIT, UNIT, 9*UNIT, UNIT);
    draw.fillStyle = "#880000"; // Brown
    draw.fillRect(2*UNIT, 2*UNIT, 3*UNIT, UNIT);
    draw.fillRect(UNIT, 3*UNIT, UNIT, 3*UNIT);
    draw.fillRect(2*UNIT, 5*UNIT, UNIT, UNIT);
    draw.fillRect(3*UNIT, 3*UNIT, UNIT, 2*UNIT);
    draw.fillRect(4*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(7*UNIT, 2*UNIT, UNIT, 2*UNIT);
    draw.fillRect(8*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(7*UNIT, 5*UNIT, 4*UNIT, UNIT);
    draw.fillStyle = "#FFA800"; // Orange
    draw.fillRect(5*UNIT, 2*UNIT, 2*UNIT, 5*UNIT);
    draw.fillRect(4*UNIT, 3*UNIT, UNIT, UNIT);
    draw.fillRect(7*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(3*UNIT, 5*UNIT, 2*UNIT, 2*UNIT);
    draw.fillRect(7*UNIT, 6*UNIT, 3*UNIT, UNIT);
    draw.fillRect(2*UNIT, 3*UNIT, UNIT, 2*UNIT);
    draw.fillRect(8*UNIT, 2*UNIT, UNIT, 2*UNIT);
    draw.fillRect(9*UNIT, 3*UNIT, 2*UNIT, 2*UNIT);
    draw.fillRect(11*UNIT, 4*UNIT, UNIT, UNIT);
    // Body
    draw.fillStyle = "#FF0000"; // Red
    draw.fillRect(2*UNIT, 7*UNIT, UNIT, 4*UNIT);
    draw.fillRect(3*UNIT, 7*UNIT, UNIT, 3*UNIT);
    draw.fillRect(UNIT, 8*UNIT, UNIT, 2*UNIT);
    draw.fillRect(0, 9*UNIT, UNIT, UNIT);
    draw.fillRect(5*UNIT, 7*UNIT, 2*UNIT, 2*UNIT);
    draw.fillRect(7*UNIT, 7*UNIT, UNIT, UNIT);
    draw.fillRect(8*UNIT, 8*UNIT, 3*UNIT, 2*UNIT);
    draw.fillRect(11*UNIT, 9*UNIT, UNIT, UNIT);
    draw.fillRect(9*UNIT, 10*UNIT, UNIT, UNIT);
    draw.fillStyle = "#3D00FE"; // Blue
    draw.fillRect(4*UNIT, 7*UNIT, UNIT, 3*UNIT);
    draw.fillRect(5*UNIT, 9*UNIT, 2*UNIT, 4*UNIT);
    draw.fillRect(7*UNIT, 8*UNIT, UNIT, 2*UNIT);
    draw.fillRect(4*UNIT, 11*UNIT, UNIT, 3*UNIT);
    draw.fillRect(3*UNIT, 10*UNIT, UNIT, 4*UNIT);
    draw.fillRect(2*UNIT, 12*UNIT, UNIT, 2*UNIT);
    draw.fillRect(7*UNIT, 11*UNIT, UNIT, 3*UNIT);
    draw.fillRect(8*UNIT, 10*UNIT, UNIT, 4*UNIT);
    draw.fillRect(9*UNIT, 12*UNIT, UNIT, 2*UNIT);
    draw.fillStyle = "#FFA800"; // Orange
    draw.fillRect(0, 10*UNIT, 2*UNIT, 3*UNIT);
    draw.fillRect(4*UNIT, 10*UNIT, UNIT, UNIT);
    draw.fillRect(2*UNIT, 11*UNIT, UNIT, UNIT);
    draw.fillRect(7*UNIT, 10*UNIT, UNIT, UNIT);
    draw.fillRect(9*UNIT, 11*UNIT, UNIT, UNIT);
    draw.fillRect(10*UNIT, 10*UNIT, 2*UNIT, 3*UNIT);
    draw.fillStyle = "#880000"; // Brown
    draw.fillRect(UNIT, 14*UNIT, 3*UNIT, UNIT);
    draw.fillRect(0, 15*UNIT, 4*UNIT, UNIT);
    draw.fillRect(8*UNIT, 14*UNIT, 3*UNIT, 2*UNIT);
    draw.fillRect(11*UNIT, 15*UNIT, UNIT, UNIT);
}
function drawWalking1() {
    // HEAD
    draw.fillStyle = "#FF0000";
    draw.fillRect(4*UNIT,1*UNIT,5*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,2*UNIT,9*UNIT,1*UNIT);
    draw.fillStyle = "#FFA800";
    draw.fillRect(3*UNIT,3*UNIT,7*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,4*UNIT,10*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,5*UNIT,11*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,6*UNIT,10*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,7*UNIT,7*UNIT,1*UNIT);
    draw.fillStyle = "#880000";
    draw.fillRect(3*UNIT,3*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,3*UNIT,1*UNIT,3*UNIT);
    draw.fillRect(5*UNIT,5*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,4*UNIT,1*UNIT,3*UNIT);
    draw.fillRect(3*UNIT,6*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,3*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(9*UNIT,5*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,6*UNIT,4*UNIT,1*UNIT);
    // BODY
    draw.fillStyle = "#FF0000";
    draw.fillRect(3*UNIT,8*UNIT,4*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,9*UNIT,6*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,10*UNIT,5*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,8*UNIT,1*UNIT,1*UNIT);
    draw.fillStyle = "#3D00FE";
    draw.fillRect(7*UNIT,8*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,10*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,11*UNIT,7*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,12*UNIT,7*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,13*UNIT,8*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,12*UNIT,3*UNIT,3*UNIT);
    draw.fillRect(6*UNIT,12*UNIT,3*UNIT,3*UNIT);
    draw.fillStyle = "#FFA800";
    draw.fillRect(2*UNIT,9*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(1*UNIT,10*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(9*UNIT,9*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(10*UNIT,8*UNIT,1*UNIT,3*UNIT);
    draw.fillRect(9*UNIT,10*UNIT,2*UNIT,1*UNIT);
    draw.fillStyle = "#880000";
    draw.fillRect(5*UNIT,15*UNIT,3*UNIT,2*UNIT);
    draw.fillRect(8*UNIT,16*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(1*UNIT,11*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(1*UNIT,11*UNIT,1*UNIT,4*UNIT);
    draw.fillRect(0*UNIT,14*UNIT,1*UNIT,2*UNIT);
}
function drawWalking2() {
    // HEAD
    draw.fillStyle = "#FF0000"; // Red
    draw.fillRect(2*UNIT, 0, 5*UNIT, UNIT);
    draw.fillRect(UNIT, UNIT, 9*UNIT, UNIT);
    draw.fillStyle = "#880000"; // Brown
    draw.fillRect(UNIT, 2*UNIT, 3*UNIT, UNIT);
    draw.fillRect(0, 3*UNIT, UNIT, 3*UNIT);
    draw.fillRect(UNIT, 5*UNIT, UNIT, UNIT);
    draw.fillRect(2*UNIT, 3*UNIT, UNIT, 2*UNIT);
    draw.fillRect(3*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(6*UNIT, 2*UNIT, UNIT, 2*UNIT);
    draw.fillRect(7*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(6*UNIT, 5*UNIT, 4*UNIT, UNIT);
    draw.fillStyle = "#FFA800"; // Orange
    draw.fillRect(4*UNIT, 2*UNIT, 2*UNIT, 5*UNIT);
    draw.fillRect(3*UNIT, 3*UNIT, UNIT, UNIT);
    draw.fillRect(6*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(2*UNIT, 5*UNIT, 2*UNIT, 2*UNIT);
    draw.fillRect(6*UNIT, 6*UNIT, 3*UNIT, UNIT);
    draw.fillRect(UNIT, 3*UNIT, UNIT, 2*UNIT);
    draw.fillRect(7*UNIT, 2*UNIT, UNIT, 2*UNIT);
    draw.fillRect(8*UNIT, 3*UNIT, 2*UNIT, 2*UNIT);
    draw.fillRect(10*UNIT, 4*UNIT, UNIT, UNIT);
    // BODY
    draw.fillStyle = "#3D00FE"; // Blue
    draw.fillRect(3*UNIT,7*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(0,8*UNIT,8*UNIT,4*UNIT);
    draw.fillRect(1*UNIT,12*UNIT,7*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,13*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,10*UNIT,1*UNIT,2*UNIT);
    draw.fillStyle = "#FF0000"; // Red
    draw.fillRect(0,8*UNIT,1*UNIT,3*UNIT);
    draw.fillRect(1*UNIT,7*UNIT,1*UNIT,5*UNIT);
    draw.fillRect(2*UNIT,7*UNIT,1*UNIT,6*UNIT);
    draw.fillRect(3*UNIT,8*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,10*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,7*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(6*UNIT,8*UNIT,2*UNIT,1*UNIT);
    draw.fillStyle = "#FFA800"; // Orange
    draw.fillRect(5*UNIT,9*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,9*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,11*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,12*UNIT,2*UNIT,1*UNIT);
    draw.fillStyle = "#880000"; // Brown
    draw.fillRect(5*UNIT,13*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,14*UNIT,7*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,15*UNIT,4*UNIT,1*UNIT);
}
function drawWalking3() {
    // HEAD
    draw.fillStyle = "#FF0000"; // Red
    draw.fillRect(5*UNIT, 0, 5*UNIT, UNIT);
    draw.fillRect(4*UNIT, UNIT, 9*UNIT, UNIT);
    draw.fillStyle = "#880000"; // Brown
    draw.fillRect(4*UNIT, 2*UNIT, 3*UNIT, UNIT);
    draw.fillRect(3*UNIT, 3*UNIT, UNIT, 3*UNIT);
    draw.fillRect(4*UNIT, 5*UNIT, UNIT, UNIT);
    draw.fillRect(5*UNIT, 3*UNIT, UNIT, 2*UNIT);
    draw.fillRect(6*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(9*UNIT, 2*UNIT, UNIT, 2*UNIT);
    draw.fillRect(10*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(9*UNIT, 5*UNIT, 4*UNIT, UNIT);
    draw.fillStyle = "#FFA800"; // Orange
    draw.fillRect(7*UNIT, 2*UNIT, 2*UNIT, 5*UNIT);
    draw.fillRect(6*UNIT, 3*UNIT, UNIT, UNIT);
    draw.fillRect(9*UNIT, 4*UNIT, UNIT, UNIT);
    draw.fillRect(5*UNIT, 5*UNIT, 2*UNIT, 2*UNIT);
    draw.fillRect(9*UNIT, 6*UNIT, 3*UNIT, UNIT);
    draw.fillRect(4*UNIT, 3*UNIT, UNIT, 2*UNIT);
    draw.fillRect(10*UNIT, 2*UNIT, UNIT, 2*UNIT);
    draw.fillRect(11*UNIT, 3*UNIT, 2*UNIT, 2*UNIT);
    draw.fillRect(13*UNIT, 4*UNIT, UNIT, UNIT);
    // BODY
    draw.fillStyle = "#3D00FE"; // Blue
    draw.fillRect(2*UNIT,12*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,11*UNIT,1*UNIT,3*UNIT);
    draw.fillRect(4*UNIT,10*UNIT,2*UNIT,4*UNIT);
    draw.fillRect(6*UNIT,7*UNIT,3*UNIT,6*UNIT);
    draw.fillRect(9*UNIT,9*UNIT,2*UNIT,5*UNIT);
    draw.fillRect(11*UNIT,11*UNIT,1*UNIT,3*UNIT);
    draw.fillStyle = "#FF0000"; // Red
    draw.fillRect(2*UNIT,7*UNIT,4*UNIT,2*UNIT);
    draw.fillRect(4*UNIT,9*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,7*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(9*UNIT,8*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(11*UNIT,9*UNIT,2*UNIT,1*UNIT);
    draw.fillStyle = "#FFA800"; // Orange
    draw.fillRect(0,8*UNIT,2*UNIT,3*UNIT);
    draw.fillRect(2*UNIT,9*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(12*UNIT,8*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(13*UNIT,9*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(7*UNIT,9*UNIT,1*UNIT,1*UNIT);
    draw.fillStyle = "#880000"; // Brown
    draw.fillRect(1*UNIT,13*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(1*UNIT,14*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,15*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(13*UNIT,10*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(12*UNIT,11*UNIT,2*UNIT,3*UNIT);
}

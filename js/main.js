/**
 *
 * main
 */

var canvasPong = document.getElementById("canvas_pong");

var pong = new Pong(document, canvasPong, 0, 0);

function draw() {
    pong.draw();
    requestAnimationFrame(draw);
}

draw();
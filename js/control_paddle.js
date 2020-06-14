/**
 * ControlPaddle.
 *
 * @class ControlPaddle
 * @extends {Control}
 */
let codeKey = 0;
let relativeX = 0;
let inMouse = false;

class ControlPaddle extends Control {

    constructor(document, canvas, context, figure) {
        super(document, canvas, context, figure);
    }

    move() {
        switch (codeKey) {
            case keys.RIGHT:
                if (this.figure.posX < (this.canvas.width - this.figure.width)) {
                    this.figure.goToRight(7);
                }
                break;
            case keys.LEFT:
                if (this.figure.posX > 0) {
                    this.figure.goToLeft(7);
                }
                break;
        }
        if (inMouse) {
            relativeX -= this.canvas.offsetLeft;
            if (relativeX > 0 && relativeX < this.canvas.width) {
                this.figure.posX = relativeX - this.figure.width / 2;
            }
            inMouse = false;
        }
        this.figure.draw();
    }
}

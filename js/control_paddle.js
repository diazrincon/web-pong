/**
 * ControlPaddle.
 *
 * @class ControlPaddle
 * @extends {Control}
 */

var codeKey = 0;
var relativeX = 0;
var inMouse = false;

class ControlPaddle extends Control {

    constructor(document, canvas, context, figure) {
        super(document, canvas, context, figure);
        this.keyCommand = new KeyCommand(this.document);
        this.MouseCommand = new MouseCommand(this.document, this.canvas);
    }

    move() {
        switch (codeKey) {
            case keys.RIGTH:
                if (this.figure.posX < (this.canvas.width - this.figure.width)) {
                    this.figure.goToRigth(7);
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
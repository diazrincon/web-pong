/**
 * ControlBall.
 *
 * @class ControlBall
 * @extends {Control}
 */

var codeKey = 0;
var relativeX = 0;
var inMouse = false;
var lives = 3;

class ControlBall extends Control {

    constructor(document, canvas, context, ball, paddle) {
        super(document, canvas, context, ball);
        this.paddle = paddle;
        this.delta = 2;
        this.rigthLimit = this.canvas.width - this.figure.radius;
        this.leftLimit = this.figure.radius;
        this.verticalDirUp = true;
        this.horizontalDirRigth = true;
    }

    move() {

        if (this.horizontalDirRigth) {
            if ((this.figure.posX + this.delta) > this.rigthLimit) {
                this.horizontalDirRigth = false;
            } else {
                this.figure.goToRigth(this.delta);
            }
        } else {
            if ((this.figure.posX - this.delta) < this.leftLimit) {
                this.horizontalDirRigth = true;
            } else {
                this.figure.goToLeft(this.delta);
            }
        }


        //this.figure.goToRigth(this.delta);

        /*if (this.figure.PosY + this.deltaY < this.figure.radius) {
            this.deltaY *= -1;
        } else if (this.figure.PosY + this.deltaY > this.canvas.height - this.figure.radius) {
            if (this.figure.PosX > this.paddle.posX && x < this.paddle.posX + this.paddle, width) {
                this.deltaY *= -1;
            } else {
                lives--;
                this.figure.PosX = this.canvas.width / 2;
                this.figure.PosY = this.canvas.height - 30;
                this.deltaX = 2;
                this.deltaY = -2;
                this.paddle.posX = (this.canvas.width - this.paddle.width) / 2;
            }
        }*/

        this.figure.draw();
    }
}
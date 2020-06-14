/**
 * ControlBall.
 *
 * @class ControlBall
 * @extends {Control}
 */
class ControlBall extends Control {

    constructor(document, canvas, context, ball) {
        super(document, canvas, context, ball);
        this.delta = 2;
        this.rigthLimit = this.canvas.width - this.figure.radius;
        this.leftLimit = this.figure.radius;
        this.horizontalDirRigth = true;
    }

    move() {

        if (this.horizontalDirRigth) {
            if ((this.figure.posX + this.delta) > this.rigthLimit) {
                this.horizontalDirRigth = false;
            } else {
                this.figure.goToRight(this.delta);
            }
        } else {
            if ((this.figure.posX - this.delta) < this.leftLimit) {
                this.horizontalDirRigth = true;
            } else {
                this.figure.goToLeft(this.delta);
            }
        }
        this.figure.draw();
    }
}

/**
 * Abstract Class Figure.
 *
 * @class Figure
 */

class Figure {

    constructor(canvas, context, posX, posY, fillStyle) {
        if (this.constructor == Figure) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.canvas = canvas;
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.fillStyle = fillStyle;
    }

    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }

    goToRigth(delta) {
        this.posX += delta;
    }
    goToLeft(delta) {
        this.posX -= delta;
    }

    goToUp(delta) {
        this.posY -= delta;
    }

    goToDown(delta) {
        this.posY += delta;
    }


}
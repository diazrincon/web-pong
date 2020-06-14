/**
 * Abstract Class Figure.
 *
 * @class Figure
 */

class Figure {

    constructor(canvas, context, posX, posY, fillStyle) {
        if (this.constructor === Figure) {
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

    goToLeft(delta) {
        this.posX -= delta;
    }

    goToRight(delta)    {
        this.posX += delta;
    }
}

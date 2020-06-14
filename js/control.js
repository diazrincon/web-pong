/**
 * Abstract Class Control.
 *
 * @class Control
 */

class Control {

    constructor(document, canvas, context, figure) {
        if (this.constructor === Control) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.canvas = canvas;
        this.figure = figure;
    }

    move() {
        throw new Error("Method 'move()' must be implemented.");
    }
}

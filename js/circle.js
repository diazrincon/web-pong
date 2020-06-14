/**
 * Circle.
 *
 * @class Circle
 * @extends {Figura}
 */
class Circle extends Figure {

    constructor(canvas, context, posX, posY, fillStyle) {
        super(canvas, context, posX, posY, fillStyle);
        this.radius = 0;

    }

    setRadius(radius) {
        this.radius = radius;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.fillStyle;
        this.context.fill();
        this.context.closePath();
    }
}
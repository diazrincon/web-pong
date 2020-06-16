/**
 * Ball
 * @class Ball
 * @extends Figure
 **/
class Ball extends Figure {

    constructor(radius, posX, posY, stepX, stepY, direction) {
        super(2 * radius, 2 * radius, posX, posY);
        this.radius = radius;
        this.stepX = stepX;
        this.stepY = stepY;
        this.direction = direction;
    }

    move() {

    }
}

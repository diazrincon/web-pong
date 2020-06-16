/**
 * Paddle
 * @class Paddle
 * @extends Figure
 **/
class Paddle extends Figure {

    constructor(height, width, posX, posY, step, direction) {
        super(height, width, posX, posY);
        this.step = step;
        this.direction = direction;
    }

    move()  {
        switch(this.direction)  {
            case 'UP':
                this.posY -= this.step;
                break;
            case 'DOWN':
                this.posY += this.step;
                break;
            default:
                break;
        }
    }
}

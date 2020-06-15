/**
 * Figure
 * @Class Figure
 **/
class Figure    {

    constructor(height, width, posX, posY) {
        if (this.constructor === Figure) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.posX = posX;
        this.posY = posY;
        this.height = height;
        this.width = width;
    }

    move(direction)  {
        throw new Error("Method 'move()' must be implemented.");
    }
}

/**
 * Pong
 *
 * @class Pong
 */
class Pong {
    constructor(document, canvas, posX, posY) {
        this.document = document;
        this.canvas = canvas;
        this.posX = posX;
        this.PosY = posY;
        this.context = this.canvas.getContext("2d");

        this.paddle = new Rectangle(this.canvas, this.context, (posX + this.canvas.width / 2), posY, "#dddd11");
        this.paddle.setHeight(10);
        this.paddle.setWidth(75);
        this.controlPaddle = new ControlPaddle(this.document, this.canvas, this.context, this.paddle);

        this.ball = new Circle(this.canvas, this.context, (this.canvas.width / 2),
            (this.canvas.height - this.paddle.height), "#dd0027");

        this.ball.radius = 5;
        this.controlBall = new ControlBall(this.document, this.canvas, this.context, this.ball);
    }

    draw() {
        this.context.clearRect(this.posX, this.PosY, this.canvas.width, this.canvas.height);
        this.controlPaddle.move();
        this.controlBall.move();
    }
}

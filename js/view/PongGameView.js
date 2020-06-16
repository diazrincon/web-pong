class PongGameView {

    constructor(canvas, pongGame) {
        this.canvas = canvas;
        this.pongGame = pongGame;
        this.ballView = new BallView(this.pongGame.ball);
        this.paddleOneView = new PaddleView(this.pongGame.paddleOne);
        this.paddleTwoView = new PaddleView(this.pongGame.paddleTwo);
    }

    render() {
        let context = this.canvas.getContext('2d');
        context.clearRect(this.pongGame.posX, this.pongGame.posY, this.pongGame.width, this.pongGame.height);
        this.paddleOneView.render(this.canvas);
        this.paddleTwoView.render(this.canvas);
        this.ballView.render(this.canvas);
    }
}

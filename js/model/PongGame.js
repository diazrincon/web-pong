/**
 * Pong game
 *
 * @class PongGame
 */
class PongGame {

    static MIN_WIN_SCORE = 3;
    static MAX_WIN_SCORE = 21;

    constructor(height, width, posX, posY, winScore) {
        if (PongGame.MAX_WIN_SCORE < winScore || PongGame.MIN_WIN_SCORE > winScore)
            throw new Error(`Score to win must be between ${PongGame.MIN_WIN_SCORE} and ${PongGame.MAX_WIN_SCORE}`);
        this.winScore = winScore;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.initGame();
    }

    update() {
        this.checkCollisions();
        this.moveFigures();
        this.updateScores();
        if (this.isGameOver()) {
            this.endGame();
            this.initGame();
        }
    }

    initGame() {
        this.ball = new Ball(10, 50, 50, 1, 1);
        //Players
        this.playerOne = new Player();
        this.playerTwo = new Player();
        //Paddles
        let paddleHeight = this.height * 0.25;
        let paddleY = this.height / 2 - paddleHeight;

        this.paddleOne = new Paddle(paddleHeight, 15, 10, paddleY, 5, ' ');
        this.paddleTwo = new Paddle(paddleHeight, 15, this.width - 25, paddleY, 5, ' ');
        //Assign players to paddles
        this.playerOne.paddle = this.paddleOne;
        this.paddleOne.player = this.playerOne;

        this.playerTwo.paddle = this.paddleTwo;
        this.paddleTwo.player = this.playerTwo;
    }

    isGameOver() {
        return this.playerOne.score > this.winScore || this.playerTwo.score > this.winScore;
    }

    endGame() {
        alert(`¡Ha ganado ${(this.playerOne.score > this.playerTwo.score) ? 'Jugador 1' : 'Jugador 2'}!`);
    }

    checkCollisions() {

    }

    moveFigures() {

    }

    updateScores() {

    }
}

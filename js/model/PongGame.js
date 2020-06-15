/**
 * Pong game
 *
 * @class PongGame
 */
class PongGame  {

    static MIN_WIN_SCORE = 3;
    static MAX_WIN_SCORE = 21;

    constructor(height, width, posX, posY, winScore) {
        if(PongGame.MAX_WIN_SCORE < winScore || PongGame.MIN_WIN_SCORE > winScore)
            throw new Error(`Score to win must be between ${PongGame.MIN_WIN_SCORE} and ${PongGame.MAX_WIN_SCORE}`);
        this.winScore = winScore;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.ball = new Ball(10, 0, 0, 1, 1);
        //Players
        this.playerOne = new Player();
        this.playerTwo = new Player();
        //Paddles
        let paddleHeight = this.height * 0.01;
        let paddleY = paddleHeight / 2 - paddleHeight;

        this.paddleOne = new Paddle(paddleHeight, 25, 50,  paddleY, 5);
        this.paddleTwo = new Paddle(paddleHeight, 25, this.width - 50, paddleY, 5);
        //Assign players to paddles
        this.playerOne.paddle = this.paddleOne;
        this.paddleOne.player = this.playerOne;

        this.playerTwo.paddle = this.paddleTwo;
        this.paddleTwo.player = this.playerTwo;
    }

    update()    {

    }

    resetGame() {

    }

    isGameOver()    {

    }

    endGame()   {

    }

    checkCollisions()   {

    }

    moveFigures()   {

    }

    updateScores()  {

    }

    startGame() {

    }
}

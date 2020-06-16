/**
 * @class MainController
 **/
class MainController {

    constructor(document) {
        this.document = document;
        let canvas = this.document.getElementById("canvas_pong");
        this.pongGame = new PongGame(canvas.height, canvas.width, 0, 0, 5);
        this.pongGameView = new PongGameView(canvas, this.pongGame);
        console.log("paddleOne.posY " + this.pongGame.paddleOne.posY)
        this.mouseControl = new MouseControl(this.pongGame.paddleOne, this.document);
        this.keyboardControl = new KeyBoardControl(this.pongGame.paddleTwo, this.document);
    }

    gameLoop() {
        this.update();
        this.render();
    }

    update() {
        this.pongGame.update();
    }

    render() {
        this.pongGameView.render();
    }
}

//MAIN
let controller = new MainController(document);

function gameLoop()  {
    controller.gameLoop();
    requestAnimationFrame(gameLoop);
}

gameLoop();

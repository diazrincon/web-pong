class PaddleView extends FigureView{

    constructor(paddle){
        super(paddle, 'yellow');
    }

    render(canvas){
        let context = canvas.getContext('2d');
        context.beginPath();
        context.rect(this.figure.posX, this.figure.posY, this.figure.width, this.figure.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

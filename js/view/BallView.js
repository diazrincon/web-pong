class BallView extends FigureView{

    constructor(ball) {
        let color = 'red';
        super(ball, color);
    }
    render(canvas){
        let context = canvas.getContext("2d");
        context.beginPath();
        context.arc(this.figure.posX, this.figure.posY, this.figure.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

class MouseControl extends FigureControl {
    constructor(figure, document) {
        super(figure, document);
        this.document.addEventListener("mousemove", e => this.move(e), false);
    }

    move(event) {
        if(event.clientY < this.figure.posY)
            this.figure.direction = 'UP';

        if(event.clientY > this.figure.posY + this.figure.height)
            this.figure.direction = 'DOWN';
    }

}

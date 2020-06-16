class KeyBoardControl extends FigureControl {
    constructor(figure, document) {
        super(figure, document);
        this.document.addEventListener("keydown", e =>this.move(e), false);
        this.document.addEventListener("keyup", e => this.move(e), false);
    }

    move(event)  {
        this.figure.direction = (event.keyCode === 38) ? 'UP': 'DOWN';
    }
}

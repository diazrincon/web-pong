class MouseControl extends FigureControl    {
    constructor(figure, document) {
        super(figure, document);
        this.document.addEventListener("mousemove", this.move(), false);
    }

    move(e)  {
        console.log(`move ${this.figure.posY}`);
    }

}

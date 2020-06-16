class FigureControl {
    constructor(figure, document) {
        if (this.constructor === FigureControl) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.figure = figure;
        console.log(this.figure.posY + " extends")
        this.document = document;
    }

    move(event)  {
        throw new Error("Method 'move()' must be implemented.");
    }
}

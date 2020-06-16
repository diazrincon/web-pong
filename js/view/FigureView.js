class FigureView{

    constructor(figure, color){
        if (this.constructor === FigureView) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.figure = figure;
        this.color = color;
    }

    render(canvas){
        throw new Error("Method 'render()' must be implemented.");
    }
}

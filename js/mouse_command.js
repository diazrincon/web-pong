/**
 * MouseCommand.
 *
 * @class MouseCommand
 */


class MouseCommand {

    constructor(document, canvas) {
        this.document = document;
        this.canvas = canvas;
        this.document.addEventListener("mousemove", this.mouseMove, false);
    }

    mouseMove(e) {
        relativeX = e.clientX;
        inMouse = true;
    }


}
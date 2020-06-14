/**
 * KeyCommand.
 *
 * @class KeyCommand
 */


var keys = { LEFT: 37, UP: 38, RIGTH: 39, DOWN: 40, NULL: 0 }

class KeyCommand {

    constructor(document) {
        this.document = document;
        this.document.addEventListener("keydown", this.keyDown, false);
        this.document.addEventListener("keyup", this.keyUp, false);

    }

    keyDown(e) {
        if (e.keyCode == keys.RIGTH) {
            codeKey = keys.RIGTH;
        } else if (e.keyCode == keys.LEFT) {
            codeKey = keys.LEFT;
        }
    }

    keyUp(e) {
        codeKey = keys.NULL;
    }
}
/**
 * KeyCommand.
 *
 * @class KeyCommand
 */
const keys = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, NULL: 0};

class KeyCommand {

    constructor(document) {
        this.document = document;
        this.document.addEventListener("keydown", this.keyDown, false);
        this.document.addEventListener("keyup", this.keyUp, false);

    }

    keyDown(e) {
        if (e.keyCode === keys.RIGHT) {
            codeKey = keys.RIGHT;
        } else if (e.keyCode === keys.LEFT) {
            codeKey = keys.LEFT;
        }
    }

    keyUp() {
        codeKey = keys.NULL;
    }
}

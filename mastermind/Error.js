"use strict";
const Console = require("../santaTecla/utils/Console").Console;
const Color = require("./Color").Color;

class Error {
    constructor(errorType) {
        switch ((errorType)) {
            case Error.ErrorTypes.DUPLICATED:
                this.message = "Repeated colors";
                break;
            case Error.ErrorTypes.WRONG_CHARACTERS:
                this.message = "Wrong colors, they must be: " + Color.allInitials();
                break;
            case Error.ErrorTypes.WRONG_LENGTH:
                this.message = "Wrong proposed combination length";
                break;
        }
    }

    writeln() {
        new Console().writelnString(this.message);
    }
}

Error.ErrorTypes = Object.freeze({
    DUPLICATED: "DUPLICATED",
    WRONG_CHARACTERS: "WRONG_CHARACTERS",
    WRONG_LENGTH: "WRONG_LENGTH"
});
exports.Error = Error;

"use strict";
const Console = require("../santaTecla/utils/Console");
const Color = require("./Color");

class Error {
    constructor(errorType) {
        if (this.message === undefined)
            this.message = null;
        switch ((errorType)) {
            case "DUPLICATED":
                this.message = "Repeated colors";
                break;
            case "WRONG_CHARACTERS":
                this.message = "Wrong colors, they must be: " + Color.Color.allInitials();
                break;
            case "WRONG_LENGTH":
                this.message = "Wrong proposed combination length";
                break;
        }
    }

    writeln() {
        new Console.Console().writelnString(this.message);
    }
}

Error.ErrorTypes = Object.freeze({
    DUPLICATED: "DUPLICATED",
    WRONG_CHARACTERS: "WRONG_CHARACTERS",
    WRONG_LENGTH: "WRONG_LENGTH"
});

exports.Error = Error;

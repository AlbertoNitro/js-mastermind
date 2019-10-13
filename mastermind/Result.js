"use strict";
const WithConsoleModel = require("../santaTecla/utils/WithConsoleModel");
const Combination = require("./Combination");
const Message = require("./Message");

class Result extends WithConsoleModel.WithConsoleModel {
    constructor(blacks, whites) {
        super();
        this.blacks = 0;
        this.whites = 0;
        if (!(blacks >= 0))
            throw new Error(`Assertion error: [assert blacks(${this.blacks}) >= 0;]`);
        if (!(whites >= 0))
            throw new Error(`Assertion error: [assert whites(${this.whites}) >= 0;]`);
        this.blacks = blacks;
        this.whites = whites;
    }

    isWinner() {
        return this.blacks === Combination.Combination.getWidth();
    }

    writeln() {
        new Message.Message(Message.Message.MessageTypes.RESULT).writelnResult(this.blacks, this.whites);
    }
}

exports.Result = Result;

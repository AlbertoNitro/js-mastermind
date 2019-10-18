"use strict";
const WithConsoleModel = require("../santaTecla/utils/WithConsoleModel").WithConsoleModel;
const Combination = require("./Combination").Combination;
const Message = require("./Message").Message;

class Result extends WithConsoleModel {
    constructor(blacks, whites) {
        super();
        this.blacks = 0;
        this.whites = 0;
        if (blacks < 0 || !isNaN(blacks))
            throw new Error(`Assertion error: [assert blacks(${this.blacks}) < 0 or NOT IS a NUMBER]`);
        if (whites < 0 || !isNaN(whites))
            throw new Error(`Assertion error: [assert whites(${this.whites}) < 0] or NOT IS a NUMBER`);
        this.blacks = blacks;
        this.whites = whites;
    }

    isWinner() {
        return this.blacks === Combination.getWidth();
    }

    writeln() {
        new Message(Message.MessageTypes.RESULT).writelnResult(this.blacks, this.whites);
    }
}

exports.Result = Result;

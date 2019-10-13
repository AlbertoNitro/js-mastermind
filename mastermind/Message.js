"use strict";
const sprintf = require('sprintf-js').sprintf;
const Console = require("../santaTecla/utils/Console");

class Message {
    constructor(messageType) {
        this.console = new Console.Console();
        switch ((messageType)) {
            case "ATTEMPTS":
                this.message = "%d attempt(s): ";
                break;
            case "SECRET":
                this.message = "*";
                break;
            case "RESUME":
                this.message = "Do you want to continue";
                break;
            case "RESULT":
                this.message = " --> %d blacks and %d whites";
                break;
            case "PROPOSED_COMBINATION":
                this.message = "Propose a combination: ";
                break;
            case "TITLE":
                this.message = "----- MASTERMIND -----";
                break;
            case "WINNER":
                this.message = "You\'ve won!!! ;-)";
                break;
            case "LOOSER":
                this.message = "You\'ve lost!!! :-(";
                break;
        }
    }

    write() {
        this.console.writeString(this.message);
    }

    writeln() {
        this.console.writelnString(this.message);
    }

    writelnAttempts(attempts) {
        this.console.writelnString(sprintf(this.message, attempts));
    }

    writelnResult(blacks, whites) {
        this.console.writelnString(sprintf(this.message, blacks, whites));
    }
}

Message.MessageTypes = Object.freeze({
    ATTEMPTS: "ATTEMPTS",
    SECRET: "SECRET",
    RESUME: "RESUME",
    RESULT: "RESULT",
    PROPOSED_COMBINATION: "PROPOSED_COMBINATION",
    TITLE: "TITLE",
    WINNER: "WINNER",
    LOOSER: "LOOSER"
});

exports.Message = Message;

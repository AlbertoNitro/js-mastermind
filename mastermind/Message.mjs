import {Console} from '../santaTecla/utils/Console';
import * as sprintf from "sprintf-js";

export class Message {
    constructor(messageType) {
        this.console = new Console();
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
    ATTEMPTS:   Symbol("ATTEMPTS"),
    SECRET:  Symbol("SECRET"),
    RESUME: Symbol("RESUME"),
    RESULT: Symbol("RESULT"),
    PROPOSED_COMBINATION: Symbol("PROPOSED_COMBINATION"),
    TITLE: Symbol("TITLE"),
    WINNER: Symbol("WINNER"),
    LOOSER: Symbol("LOOSER")
});

import {Console} from '../santaTecla/utils/Console';
import {MessageType} from './MessageType';

export class Message {
    constructor(messageType) {
        if (this.message === undefined)
            this.message = null;
        if (this.console === undefined)
            this.console = null;
        this.console = new Console();
        switch ((messageType)) {
            case MessageType.ATTEMPTS:
                this.message = "%d attempt(s): ";
                break;
            case MessageType.SECRET:
                this.message = "*";
                break;
            case MessageType.RESUME:
                this.message = "Do you want to continue";
                break;
            case MessageType.RESULT:
                this.message = " --> %d blacks and %d whites";
                break;
            case MessageType.PROPOSED_COMBINATION:
                this.message = "Propose a combination: ";
                break;
            case MessageType.TITLE:
                this.message = "----- MASTERMIND -----";
                break;
            case MessageType.WINNER:
                this.message = "You\'ve won!!! ;-)";
                break;
            case MessageType.LOOSER:
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
        this.console.writelnString(javaemul.internal.StringHelper.format(this.message, attempts));
    }

    writelnResult(blacks, whites) {
        this.console.writelnString(javaemul.internal.StringHelper.format(this.message, blacks, whites));
    }
}

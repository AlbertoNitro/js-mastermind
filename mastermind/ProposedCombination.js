import {Combination} from './Combination';
import {Color} from './Color';
import {Error} from './Error';
import {Message} from './Message';
import {MessageType} from './MessageType';
import {ErrorType} from './ErrorType';

export class ProposedCombination extends Combination {
    write() {
        for (let i = 0; i < this.colors.length; i++) {
            let color = this.colors[i];
            color.write();
        }
    }

    read() {
        let error;
        do {
            error = null;
            new Message(MessageType.PROPOSED_COMBINATION).write();
            let characters = this.console.readString();
            if (characters.length !== Combination.getWidth()) {
                error = new Error(ErrorType.WRONG_LENGTH);
            } else {
                for (let i = 0; i < characters.length; i++) {
                    let color = Color.getInstanceChar(characters.charAt(i));
                    if (color == null) {
                        error = new Error(ErrorType.WRONG_CHARACTERS);
                    } else {
                        let j = 0;
                        let done = false;
                        while ((j < this.colors.length && !done)) {
                            if (this.colors[j] === color) {
                                error = new Error(ErrorType.DUPLICATED);
                                done = true;
                            }
                            j++;
                            if (this.colors[j] == null) {
                                this.colors[j] = color;
                            }
                        }
                    }
                }
            }
            if (error != null) {
                error.writeln();
                for (let i = 0; i < this.colors.length; i++) {
                    this.colors[i] = null;
                }
            }
        } while ((error != null));
    }

    containsInPosition(color, position) {
        return this.colors[position] === color;
    }

    contains(color) {
        for (let i = 0; i < this.colors.length; i++) {
            if (this.colors[i] === color) {
                return true;
            }
        }
        return false;
    }
}

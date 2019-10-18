"use strict";
const Combination = require("./Combination").Combination;
const Color = require("./Color").Color;
const Error = require("./Error").Error;
const Message = require("./Message").Message;

class ProposedCombination extends Combination {
    write() {
        for (let i = 0; i < this.colors.length; i++) {
            let color = this.colors[i];
            color.write();
        }
    }

    read() {
        let error;
        do {
            new Message(Message.MessageTypes.PROPOSED_COMBINATION).write();
            let characters = this.console.readString();
            if (characters.length !== Combination.getWidth()) {
                error = new Error(Error.ErrorTypes.WRONG_LENGTH);
            } else {
                for (let i = 0; i < characters.length; i++) {
                    let color = Color.getInstanceChar(characters.charAt(i));
                    if (color == null) {
                        error = new Error(Error.ErrorTypes.WRONG_CHARACTERS);
                    } else {
                        let j = 0;
                        let done = false;
                        while (j < this.colors.length && !done) {
                            if (this.colors[j] === color) {
                                error = new Error(Error.ErrorTypes.DUPLICATED);
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

exports.ProposedCombination = ProposedCombination;

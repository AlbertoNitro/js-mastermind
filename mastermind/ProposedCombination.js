"use strict";
const Combination = require("./Combination");
const Color = require("./Color");
const Error = require("./Error");
const Message = require("./Message");

class ProposedCombination extends Combination.Combination {
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
            new Message.Message(Message.Message.MessageTypes.PROPOSED_COMBINATION).write();
            let characters = this.console.readString();
            if (characters.length !== Combination.Combination.getWidth()) {
                error = new Error.Error(Error.Error.ErrorTypes.WRONG_LENGTH);
            } else {
                for (let i = 0; i < characters.length; i++) {
                    let color = Color.Color.getInstanceChar(characters.charAt(i));
                    if (color == null) {
                        error = new Error.Error(Error.Error.ErrorTypes.WRONG_CHARACTERS);
                    } else {
                        let j = 0;
                        let done = false;
                        while ((j < this.colors.length && !done)) {
                            if (this.colors[j].getInitial() === color.getInitial()) {
                                error = new Error.Error(Error.Error.ErrorTypes.DUPLICATED);
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

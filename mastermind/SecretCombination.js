"use strict";
const Combination = require("./Combination");
const Color = require("./Color");
const Result = require("./Result");
const Message = require("./Message");

class SecretCombination extends Combination.Combination {
    constructor() {
        super();
        for (let i = 0; i < this.colors.length; i++) {
            let color;
            let isRepeated;
            do {
                isRepeated  = false;
                let indexRandom = this.getRandomInt(0, Color.Color.ColorTypes.length);
                color = Color.Color.getInstanceInt(indexRandom);
                console.log(color.toString());
                for (let j = 0; j < this.colors.length; j++) {
                    if (this.colors[j] === color) {
                        isRepeated = true;
                    }
                }
            } while (isRepeated);
            this.colors[i] = color;
        }
        this.shuffleArray(this.colors);
    }

    getResult(proposedCombination) {
        let blacks = 0;
        for (let i = 0; i < this.colors.length; i++) {
            if (proposedCombination.containsInPosition(this.colors[i], i)) {
                blacks++;
            }
        }
        let whites = 0;
        for (let k = 0; k < this.colors.length; k++) {
            let color = this.colors[k];
            if (proposedCombination.contains(color)) {
                whites++;
            }
        }
        return new Result.Result(blacks, whites - blacks);
    }

    writeln() {
        for (let i = 0; i < Combination.Combination.getWidth(); i++) {
            new Message.Message(Message.Message.MessageTypes.SECRET).write();
        }
        this.console.writeln();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let index = this.getRandomInt(0, array.length);
            let color = array[index];
            array[index] = array[i];
            array[i] = color;
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

exports.SecretCombination = SecretCombination;

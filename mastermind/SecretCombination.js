"use strict";
const Combination = require("./Combination").Combination;
const Color = require("./Color").Color;
const Result = require("./Result").Result;
const Message = require("./Message").Message;

class SecretCombination extends Combination {
    constructor() {
        super();
        let indexRandom;
        for (let i = 0; i < this.colors.length; i++) {
            indexRandom = SecretCombination.getRandomInt(0, Color.ColorTypes.length);
            this.colors[i] = Color.getInstanceInt(indexRandom);
        }
        SecretCombination.shuffleArray(this.colors);
        console.log("La combinacion secreta generada es: ");
        this.writeln()
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
        return new Result(blacks, whites - blacks);
    }

    writeln() {
        for (let i = 0; i < Combination.getWidth(); i++) {
            new Message(Message.MessageTypes.SECRET).write();
        }
        this.console.writeln();
    }

    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let index = SecretCombination.getRandomInt(0, array.length);
            let color = array[index];
            array[index] = array[i];
            array[i] = color;
        }
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

exports.SecretCombination = SecretCombination;

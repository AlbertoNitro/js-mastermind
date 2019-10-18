"use strict";
const WithConsoleModel = require("../santaTecla/utils/WithConsoleModel").WithConsoleModel;
const YesNoDialog = require("../santaTecla/utils/YesNoDialog").YesNoDialog;
const SecretCombination = require("./SecretCombination").SecretCombination;
const ProposedCombination = require("./ProposedCombination").ProposedCombination;
const Message = require("./Message").Message;

class Mastermind extends WithConsoleModel {
    constructor() {
        super();
        this.secretCombination = null;
        this.proposedCombinations = null;
        this.results = null;
        this.attempts = 0;
        this.clear();
    }

    clear() {
        this.secretCombination = new SecretCombination();
        this.proposedCombinations = new Array(Mastermind.MAX_LONG);
        this.results = new Array(Mastermind.MAX_LONG);
        this.attempts = 0;
    }

    play() {
        let newGame;
        do {
            new Message(Message.MessageTypes.TITLE).writeln();
            this.secretCombination.writeln();
            let finished = false;
            do {
                let proposedCombination = new ProposedCombination();
                proposedCombination.read();
                let added = false;
                let i = 0;
                while ((!added && i < this.proposedCombinations.length)) {
                    if (this.proposedCombinations[i] == null) {
                        this.proposedCombinations[i] = proposedCombination;
                        this.results[i] = this.secretCombination.getResult(proposedCombination);
                        added = true;
                    }
                    i++;
                }
                this.attempts++;
                this.console.writeln();
                new Message(Message.MessageTypes.ATTEMPTS).writelnAttempts(this.attempts);
                this.secretCombination.writeln();
                for (i = 0; i < this.attempts; i++) {
                    this.proposedCombinations[i].write();
                    this.results[i].writeln();
                }
                if (this.results[this.attempts - 1].isWinner()) {
                    new Message(Message.MessageTypes.WINNER).writeln();
                    finished = true;
                } else if (this.attempts === Mastermind.MAX_LONG) {
                    new Message(Message.MessageTypes.LOOSER).writeln();
                    finished = true;
                }
            } while ((!finished));
            new Message(Message.MessageTypes.RESUME).write();
            newGame = new YesNoDialog().read();
            if (newGame) {
                this.clear();
            }
        } while ((newGame));
    }
}
Mastermind.MAX_LONG = 10;
exports.Mastermind = Mastermind;

Message.MessageTypes.TITLE.toString();
new Mastermind().play();

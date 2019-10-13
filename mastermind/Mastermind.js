"use strict";
const WithConsoleModel = require("../santaTecla/utils/WithConsoleModel");
const YesNoDialog = require("../santaTecla/utils/YesNoDialog");
const SecretCombination = require("./SecretCombination");
const ProposedCombination = require("./ProposedCombination");
const Message = require("./Message");

class Mastermind extends WithConsoleModel.WithConsoleModel {
    constructor() {
        super();
        if (this.secretCombination === undefined)
            this.secretCombination = null;
        if (this.proposedCombinations === undefined)
            this.proposedCombinations = null;
        if (this.results === undefined)
            this.results = null;
        if (this.attempts === undefined)
            this.attempts = 0;
        this.clear();
    }

    static main(args) {
        new Mastermind().play();
    }

    clear() {
        this.secretCombination = new SecretCombination.SecretCombination();
        this.proposedCombinations = (s => {
            let a = [];
            while (s-- > 0)
                a.push(null);
            return a;
        })(Mastermind.MAX_LONG);
        this.results = (s => {
            let a = [];
            while (s-- > 0)
                a.push(null);
            return a;
        })(Mastermind.MAX_LONG);
        this.attempts = 0;
    }

    play() {
        let newGame;
        do {
            new Message.Message(Message.Message.MessageTypes.TITLE).writeln();
            this.secretCombination.writeln();
            let finished = false;
            do {
                let proposedCombination = new ProposedCombination.ProposedCombination();
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
                new Message.Message(Message.Message.MessageTypes.ATTEMPTS).writelnAttempts(this.attempts);
                this.secretCombination.writeln();
                for (i = 0; i < this.attempts; i++) {
                    this.proposedCombinations[i].write();
                    this.results[i].writeln();
                }
                if (this.results[this.attempts - 1].isWinner()) {
                    new Message.Message(Message.MessageTypes.WINNER).writeln();
                    finished = true;
                } else if (this.attempts === Mastermind.MAX_LONG) {
                    new Message.Message(Message.Message.MessageTypes.LOOSER).writeln();
                    finished = true;
                }
            } while ((!finished));
            new Message.Message(Message.Message.MessageTypes.RESUME).write();
            newGame = new YesNoDialog.YesNoDialog().read();
            if (newGame) {
                this.clear();
            }
        } while ((newGame));
    }

    static async question() {
        console.log ('Input some code:');
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        await process.stdin.once('data', function (someCode) {
            process.stdin.pause();
            console.log ('Code: ' + someCode);
        });
    }
}

Mastermind.MAX_LONG = 10;
exports.Mastermind = Mastermind;
Message.Message.MessageTypes.TITLE.toString();
Mastermind.main(null);

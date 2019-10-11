import {WithConsoleModel} from '../santaTecla/utils/WithConsoleModel';
import {YesNoDialog} from '../santaTecla/utils/YesNoDialog';
import {SecretCombination} from './SecretCombination';
import {ProposedCombination} from './ProposedCombination';
import {Message} from './Message';
import {MessageType} from './MessageType';

export class Mastermind extends WithConsoleModel {
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
        this.secretCombination = new SecretCombination();
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
            new Message(MessageType.TITLE).writeln();
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
                new Message(MessageType.ATTEMPTS).writelnAttempts(this.attempts);
                this.secretCombination.writeln();
                for (i = 0; i < this.attempts; i++) {
                    this.proposedCombinations[i].write();
                    this.results[i].writeln();
                }
                if (this.results[this.attempts - 1].isWinner()) {
                    new Message(MessageType.WINNER).writeln();
                    finished = true;
                } else if (this.attempts === Mastermind.MAX_LONG) {
                    new Message(MessageType.LOOSER).writeln();
                    finished = true;
                }
            } while ((!finished));
            new Message(MessageType.RESUME).write();
            newGame = new YesNoDialog().read();
            if (newGame) {
                this.clear();
            }
        } while ((newGame));
    }
}

Mastermind.MAX_LONG = 10;
Mastermind.main(null);

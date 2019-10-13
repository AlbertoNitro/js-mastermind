import {WithConsoleModel} from '../santaTecla/utils/WithConsoleModel';
import {Combination} from './Combination';
import {Message} from './Message';

export class Result extends WithConsoleModel {
    constructor(blacks, whites) {
        super();
        this.blacks = 0;
        this.whites = 0;
        if (!(blacks >= 0))
            throw new Error(`Assertion error: [assert blacks(${this.blacks}) >= 0;]`);
        if (!(whites >= 0))
            throw new Error(`Assertion error: [assert whites(${this.whites}) >= 0;]`);
        this.blacks = blacks;
        this.whites = whites;
    }

    isWinner() {
        return this.blacks === Combination.getWidth();
    }

    writeln() {
        new Message(Message.MessageTypes.RESULT).writelnResult(this.blacks, this.whites);
    }
}

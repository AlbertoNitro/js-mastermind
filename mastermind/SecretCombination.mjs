import {Combination} from './Combination';
import {Color} from './Color';
import {Result} from './Result';
import {Message} from './Message';
import {MessageType} from './MessageType';

export class SecretCombination extends Combination {
    constructor() {
        super();
        for (let i = 0; i < this.colors.length; i++) {
            let color;
            let isRepeated;
            do {
                isRepeated  = false;
                let indexRandom = this.getRandomInt(0, this.colors.length);
                console.log(indexRandom);
                color = Color.getInstanceInt(indexRandom);
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
        return new Result(blacks, whites - blacks);
    }

    writeln() {
        for (let i = 0; i < Combination.getWidth(); i++) {
            new Message(MessageType.SECRET).write();
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

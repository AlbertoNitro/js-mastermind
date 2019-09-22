import {Combination} from './Combination';
import {Color} from './Color';
import {Result} from './Result';
import {Message} from './Message';
import {MessageType} from './MessageType';

export class SecretCombination extends Combination {
    constructor() {
        super();
        let random;
        for (let i = 0; i < this.colors.length; i++) {
            random = new Random(/* currentTimeMillis */Date.now());
            this.colors[i] = Color.getInstanceInt(random.nextInt(Color.length()));
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
        let random = new Random(/* currentTimeMillis */ Date.now());
        for (let i = array.length - 1; i > 0; i--) {
            let index = random.nextInt(i + 1);
            let color = array[index];
            array[index] = array[i];
            array[i] = color;
        }
    }
}

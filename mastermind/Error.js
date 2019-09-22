import {Console} from '../santaTecla/utils/Console';
import {ErrorType} from './ErrorType';
import {Color} from './Color';

export class Error {
    constructor(errorType) {
        if (this.message === undefined)
            this.message = null;
        switch ((errorType)) {
            case ErrorType.DUPLICATED:
                this.message = "Repeated colors";
                break;
            case ErrorType.WRONG_CHARACTERS:
                this.message = "Wrong colors, they must be: " + Color.allInitials();
                break;
            case ErrorType.WRONG_LENGTH:
                this.message = "Wrong proposed combination length";
                break;
        }
    }

    writeln() {
        new Console().writelnString(this.message);
    }
}

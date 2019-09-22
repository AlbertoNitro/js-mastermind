import {Console} from './Console';

export class WithConsoleModel {
    constructor() {
        if (this.console === undefined)
            this.console = null;
        this.console = new Console();
    }
}

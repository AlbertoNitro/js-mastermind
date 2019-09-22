import {WithConsoleModel} from '../santaTecla/utils/WithConsoleModel';

export class Combination extends WithConsoleModel {
    constructor() {
        super();
        if (this.colors === undefined)
            this.colors = null;
        this.colors = (s => {
            let a = [];
            while (s-- > 0)
                a.push(null);
            return a;
        })(Combination.WIDTH);
    }

    static getWidth() {
        return Combination.WIDTH;
    }
}

Combination.WIDTH = 4;

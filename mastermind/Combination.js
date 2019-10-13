"use strict";
const WithConsoleModel = require("../santaTecla/utils/WithConsoleModel");

class Combination extends WithConsoleModel.WithConsoleModel {
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
exports.Combination = Combination;

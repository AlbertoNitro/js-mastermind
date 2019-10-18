"use strict";
const WithConsoleModel = require("../santaTecla/utils/WithConsoleModel").WithConsoleModel;

class Combination extends WithConsoleModel {
    constructor() {
        super();
        this.colors = new Array(Combination.WIDTH);
    }

    static getWidth() {
        return Combination.WIDTH;
    }
}

Combination.WIDTH = 4;
exports.Combination = Combination;

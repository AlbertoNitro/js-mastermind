"use strict";
const Console = require("./Console");

class WithConsoleModel {
    constructor() {
        if (this.console === undefined)
            this.console = null;
        this.console = new Console.Console();
    }
}

exports.WithConsoleModel = WithConsoleModel;

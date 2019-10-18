"use strict";
const Console = require("./Console").Console;

class WithConsoleModel {
    constructor() {
        this.console = new Console();
    }
}

exports.WithConsoleModel = WithConsoleModel;

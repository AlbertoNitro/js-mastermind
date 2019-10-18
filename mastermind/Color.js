"use strict";
const Console = require("../santaTecla/utils/Console").Console;

class Color {
    constructor(colorType) {
        this.colorType = colorType;
    }

    static allInitials() {
        let result = "";
        for (let i = 0; i < Color.length(); i++) {
            let colorType = Color.ColorTypes[i];
            let color = new Color(colorType);
            result += color.getInitial();
        }
        return result;
    }

    static getInstanceInt(code) {
        if (!Color.isCodeValid(code))
            throw new Error(`Assertion error: [assert 0 <= code(${code}) && code < Color.length()(${Color.length()})].`);
        return new Color(Color.ColorTypes[code]);
    }

    static getInstanceChar(character) {
        if (!Color.isInitialValid(character)) {
            throw new Error(`Assertion error: [assert character(${character}) is not an initial validity for defined colors].`);
        }
        let color;
        for (let i = 0; i < Color.ColorTypes.length; i++) {
            color = new Color(Color.ColorTypes[i]);
            if (color.getInitial() === character) {
                return color;
            }
        }
    }

    static isCodeValid(code) {
        return 0 <= code && code < Color.length();
    }

    static isInitialValid(character) {
        return Color.allInitials().includes(character);
    }

    static length() {
        return Color.ColorTypes.length;
    }

    write() {
        new Console().writeChar(this.getInitial());
    }

    getInitial() {
        return this.colorType.substring(0, 1).toLowerCase();
    }
}

Color.ColorTypes = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "PURPLE"];
exports.Color = Color;

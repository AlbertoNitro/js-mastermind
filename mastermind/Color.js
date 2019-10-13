"use strict";
const Console = require("../santaTecla/utils/Console");

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
        if (!(0 <= code && code < Color.length()))
            throw new Error(`Assertion error: [assert 0 <= code(${code}) && code < Color.length()(${Color.length()})].`);
        return new Color(Color.ColorTypes[code]);
    }

    static getInstanceChar(character) {
        if (!this.allInitials().includes(character)) {
            throw new Error(`Assertion error: [character(${character}) is not an initial validity for defined colors].`);
        }
        let color;
        for (let i = 0; i < Color.ColorTypes.length; i++) {
            color = new Color(Color.ColorTypes[i]);
            if ( color.getInitial() === character) {
                return color;
            }
        }
    }

    static length() {
        return Color.ColorTypes.length;
    }

    write() {
        new Console.Console().writeChar(this.getInitial());
    }

    getInitial() {
        return this.colorType.substring(0, 1).toLowerCase();
    }
}

Color.ColorTypes = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "PURPLE"];
exports.Color = Color;


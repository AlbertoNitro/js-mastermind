import {Console} from '../santaTecla/utils/Console';
import {ColorType} from './ColorType';

export class Color {
    constructor(colorType) {
        if (this.initial === undefined)
            this.initial = null;
        if (this.ordinal === undefined)
            this.ordinal = 0;
        if (this.colorType === undefined)
            this.colorType = null;
        this.colorType = colorType;
        this.initial = this.getInitial();
        this.ordinal = ColorType[ColorType[colorType]];
    }

    static allInitials() {
        let result = "";
        let colorTypes = Color.getColorTypes();
        for (let i = 0; i < colorTypes.length; i++) {
            let colorType = colorTypes[i];
            let color = new Color(colorType);
            result += color.getInitial();
        }
        return result;
    }

    static getColorTypes() {
        let result = [];
        for (let colorType in ColorType) {
            if (!isNaN(colorType)) {
                result.push(parseInt(colorType, 10));
            }
        }
        return result;
    }

    static getInstanceInt(code) {
        if (!(0 <= code && code < Color.length()))
            throw new Error(`Assertion error: [assert 0 <= code(${code}) && code < Color.length()(${Color.length()})]`);
        return new Color(function () {
            let result = [];
            for (let colorType in ColorType) {
                if (!isNaN(colorType)) {
                    result.push(parseInt(colorType, 10));
                }
            }
            return result;
        }()[code]);
    }

    static getInstanceChar(character) {
        let colorTypes = Color.getColorTypes();
        for (let i = 0; i < colorTypes.length; i++) {
            let colorType = colorTypes[i];
            let color = new Color(colorType);
            let initial = color.getInitial();
            if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(initial) === (c => c.charCodeAt == null ? c : c.charCodeAt(0))(character)) {
                return color;
            }
        }
        return null;
    }

    static length() {
        Color.getColorTypes().length;
    }

    write() {
        new Console().writeChar(this.getInitial());
    }

    getInitial() {
        return ColorType["_$wrappers"][this.colorType].toString().charAt(0);
    }
}

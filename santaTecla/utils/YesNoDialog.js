"use strict";
const WithConsoleModel = require("./WithConsoleModel").WithConsoleModel;

class YesNoDialog extends WithConsoleModel {

    static isAfirmative(answer) {
        return answer.charCodeAt(0) === YesNoDialog.AFIRMATIVE;
    }

    static isNegative(answer) {
        return answer.charCodeAt(0) === YesNoDialog.NEGATIVE;
    }

    read() {
        let answer;
        let ok;
        do {
            answer = this.console.readChar(YesNoDialog.QUESTION);
            ok = YesNoDialog.isAfirmative(answer) || YesNoDialog.isNegative(answer);
            if (!ok) {
                this.console.writelnString(YesNoDialog.MESSAGE);
            }
        } while ((!ok));
        return YesNoDialog.isAfirmative(answer);
    }
}

YesNoDialog.AFIRMATIVE = 'y';
YesNoDialog.NEGATIVE = 'n';
YesNoDialog.MESSAGE = "The value must be \'" + YesNoDialog.AFIRMATIVE + "\' or \'" + YesNoDialog.NEGATIVE + "\'";
YesNoDialog.QUESTION = "? (" + YesNoDialog.AFIRMATIVE + "/" + YesNoDialog.NEGATIVE + "): ";
exports.YesNoDialog = YesNoDialog;

import {WithConsoleModel} from './WithConsoleModel';

export class YesNoDialog extends WithConsoleModel {
    static QUESTION_$LI$() {
        if (YesNoDialog.QUESTION == null)
            YesNoDialog.QUESTION = "? (" + YesNoDialog.AFIRMATIVE + "/" + YesNoDialog.NEGATIVE + "): ";
        return YesNoDialog.QUESTION;
    }
    ;

    static MESSAGE_$LI$() {
        if (YesNoDialog.MESSAGE == null)
            YesNoDialog.MESSAGE = "The value must be \'" + YesNoDialog.AFIRMATIVE + "\' or \'" + YesNoDialog.NEGATIVE + "\'";
        return YesNoDialog.MESSAGE;
    }
    ;

    static isAfirmative(answer) {
        return (c => c.charCodeAt == null ? c : c.charCodeAt(0))(/* toLowerCase */ answer.toLowerCase()) === (c => c.charCodeAt == null ? c : c.charCodeAt(0))(YesNoDialog.AFIRMATIVE);
    }

    static isNegative(answer) {
        return (c => c.charCodeAt == null ? c : c.charCodeAt(0))(/* toLowerCase */ answer.toLowerCase()) === (c => c.charCodeAt == null ? c : c.charCodeAt(0))(YesNoDialog.NEGATIVE);
    }

    read() {
        let answer;
        let ok;
        do {
            answer = this.console.readChar(YesNoDialog.QUESTION_$LI$());
            ok = YesNoDialog.isAfirmative(answer) || YesNoDialog.isNegative(answer);
            if (!ok) {
                this.console.writelnString(YesNoDialog.MESSAGE_$LI$());
            }
        } while ((!ok));
        return YesNoDialog.isAfirmative(answer);
    }
}

YesNoDialog.AFIRMATIVE = 'y';
YesNoDialog.NEGATIVE = 'n';
YesNoDialog.MESSAGE_$LI$();
YesNoDialog.QUESTION_$LI$();

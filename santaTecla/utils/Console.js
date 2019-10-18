"use strict";
const readlineSync = require('readline-sync');

class Console {

    readStringWithTitle(title) {
        let input;
        let ok = false;
        do {
            try {
                input = readlineSync.question(title);
                ok = true;
            } catch (exception) {
                this.writeError("characte string");
            }
        } while ((!ok));
        return input;
    }

    readString() {
        return this.readStringWithTitle("");
    }

    readInt(title) {
        let input;
        let ok = false;
        do {
            try {
                input = readlineSync.questionInt(title);
                ok = true;
            } catch (ex) {
                this.writeError("integer");
            }
        } while ((!ok));
        return input;
    }

    readChar(title) {
        let charValue;
        let ok = false;
        do {
            let input = this.readStringWithTitle(title);
            if (input.length !== 1) {
                this.writeError("character");
            } else {
                charValue = input.charAt(0);
                ok = true;
            }
        } while ((!ok));
        return charValue;
    }

    writeln() {
        console.info();
    }

    writeString(string) {
        console.info(string);
    }

    writelnString(string) {
        console.info(string);
    }

    writeChar(character) {
        console.info(character);
    }

    writeError(format) {
        console.info("FORMAT ERROR! Enter a " + format + " formatted value.");
    }
}

exports.Console = Console;

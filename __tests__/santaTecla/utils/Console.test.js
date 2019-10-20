"use strict";
const Console = require("../../../santaTecla/utils/Console").Console;
const readlineSync = require('readline-sync');

describe("Console.js", () => {

    let console = new Console();

    const QUESTION = "¿XXXXXXXX?";

    const INPUT_GREETING = "hello!";

    const INPUT_NUMBER = "1";

    const INPUT_CHAR = "c";

    test("readStringWithTitle", () => {
        // Mock with jest.fn
        readlineSync.question = jest.fn(() => INPUT_GREETING);
        let input = console.readStringWithTitle(QUESTION);
        expect(input).toBe(INPUT_GREETING);
        expect(readlineSync.question).toHaveBeenCalled();
        expect(readlineSync.question).toHaveBeenCalledWith(QUESTION);
    });

    test("readString", () => {
        readlineSync.question = jest.fn(() => INPUT_GREETING);
        let input = console.readString("");
        expect(input).toBe(INPUT_GREETING);
        expect(readlineSync.question).toHaveBeenCalled();
        expect(readlineSync.question).toHaveBeenCalledWith("");
    });

    test("readInt", () => {
        readlineSync.questionInt = jest.fn(() => INPUT_NUMBER);
        let input = console.readInt(QUESTION);
        expect(input).toBe(INPUT_NUMBER);
        expect(readlineSync.questionInt).toHaveBeenCalled();
        expect(readlineSync.questionInt).toHaveBeenCalledWith(QUESTION);
    });

    test("readChar", () => {
        readlineSync.question = jest.fn(() => INPUT_CHAR);
        let input = console.readChar(QUESTION);
        expect(input).toBe(INPUT_CHAR);
        expect(readlineSync.question).toHaveBeenCalled();
        expect(readlineSync.question).toHaveBeenCalledWith(QUESTION);
    });

    // test("writeln", () => {
    //
    // });
    //
    // test("writeString", () => {
    //
    // });
    //
    // test("writelnString", () => {
    //
    // });
    //
    // test("writeChar", () => {
    //
    // });
    //
    // test("writeError", () => {
    //
    // });

});

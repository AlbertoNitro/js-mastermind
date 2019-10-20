"use strict";
const Color = require("../../mastermind/Color").Color;

describe("Color.js", () => {

    test("allInitials", () => {
        expect(Color.allInitials()).toContain("rbygop")
    });

    test("getInstanceInt", () => {
        let color = new Color(Color.ColorTypes[0]);
        expect(Color.getInstanceInt(0).getInitial()).toBe(color.getInitial())
    });

    test("getInstanceChar", () => {
        let initials = Color.allInitials();
        let color = new Color(Color.ColorTypes[0]);
        expect(Color.getInstanceChar(initials[0]).getInitial()).toBe(color.getInitial())
    });

    test("getInstanceIntThrowError", () => {
        const block = () => {
            Color.getInstanceInt(-1);
        };
        expect(block).toThrow(Error);
    });

    test("getInstanceCharThrowError", () => {
        const block = () => {
            Color.getInstanceChar("x");
        };
        expect(block).toThrow(Error);
    });

    test("isCodeValid", () => {
        expect(Color.isCodeValid(0)).toBeTruthy();
        expect(Color.isCodeValid(-1)).toBeFalsy();
        expect(Color.isCodeValid(99999)).toBeFalsy();
    });

    test("isInitialValid", () => {
        expect(Color.isInitialValid("r")).toBeTruthy();
        expect(Color.isInitialValid("x")).toBeFalsy();
    });

    test("length", () => {
        expect(Color.length()).toBe(Color.ColorTypes.length)
    });

    // test("write", () => {
    // });

    test("getInitial", () => {
        const color = new Color(Color.ColorTypes[0]);
        expect(color.getInitial()).toBe("r")
    });
});

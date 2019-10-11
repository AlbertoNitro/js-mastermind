export var ErrorType;

(function (ErrorType) {
    ErrorType[ErrorType["DUPLICATED"] = 0] = "DUPLICATED";
    ErrorType[ErrorType["WRONG_CHARACTERS"] = 1] = "WRONG_CHARACTERS";
    ErrorType[ErrorType["WRONG_LENGTH"] = 2] = "WRONG_LENGTH";
})(ErrorType || (ErrorType = {}));

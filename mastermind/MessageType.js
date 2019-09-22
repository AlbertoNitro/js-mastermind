export var MessageType;

(function (MessageType) {
    MessageType[MessageType["ATTEMPTS"] = 0] = "ATTEMPTS";
    MessageType[MessageType["SECRET"] = 1] = "SECRET";
    MessageType[MessageType["RESUME"] = 2] = "RESUME";
    MessageType[MessageType["RESULT"] = 3] = "RESULT";
    MessageType[MessageType["PROPOSED_COMBINATION"] = 4] = "PROPOSED_COMBINATION";
    MessageType[MessageType["TITLE"] = 5] = "TITLE";
    MessageType[MessageType["WINNER"] = 6] = "WINNER";
    MessageType[MessageType["LOOSER"] = 7] = "LOOSER";
})(MessageType || (MessageType = {}));

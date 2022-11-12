'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Colors;
(function (Colors) {
    Colors["Red"] = "\u001B[31m";
    Colors["Green"] = "\u001B[32m";
    Colors["Yellow"] = "\u001B[33m";
    Colors["Cyan"] = "\u001B[36m";
    Colors["White"] = "\u001B[37m";
})(Colors || (Colors = {}));
var TypeOuput;
(function (TypeOuput) {
    TypeOuput["Reset"] = "\u001B[0m";
})(TypeOuput || (TypeOuput = {}));
var TypeError;
(function (TypeError) {
    TypeError["Error"] = "ERROR";
    TypeError["Warn"] = "WARN";
    TypeError["Info"] = "INFO";
    TypeError["Debug"] = "DEBUG";
    TypeError["Log"] = "LOG";
})(TypeError || (TypeError = {}));

const generateTimestamp = () => new Date().toLocaleString().split(',').join(' ');
const outputCustomized = (message, colorFont, typeLogger, typeOutput) => console.log(colorFont, `[${generateTimestamp()}] [${typeLogger}] ${message}`, typeOutput);

class Logger {
    static error(message) {
        this.genericOutput(message, Colors.Red, TypeError.Error);
    }
    static warn(message) {
        this.genericOutput(message, Colors.Yellow, TypeError.Warn);
    }
    static info(message) {
        this.genericOutput(message, Colors.Green, TypeError.Info);
    }
    static debug(message) {
        this.genericOutput(message, Colors.Cyan, TypeError.Debug);
    }
    static log(message) {
        this.genericOutput(message, Colors.White, TypeError.Log);
    }
    static genericOutput(message, color, type) {
        let contentMessage = message;
        if (message instanceof Object) {
            contentMessage = JSON.stringify(message, null, 2);
        }
        if (message instanceof Array) {
            contentMessage = message.map(item => {
                return item.toString();
            }).join("\n");
        }
        if (message instanceof Number) {
            contentMessage = message.toString();
        }
        if (message instanceof String) {
            contentMessage = message.toString();
        }
        outputCustomized(contentMessage, color, type, TypeOuput.Reset);
    }
}

exports.Logger = Logger;

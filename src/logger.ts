import { Colors, TypeError, TypeOuput } from "./consts/loggerConst";
import { MessageLogger } from "./protocols/logger";

import { outputCustomized } from "./utils";

export class Logger {
    static error(message: MessageLogger) {
        this.genericOutput(message, Colors.Red, TypeError.Error);
    }

    static warn(message: MessageLogger) {
        this.genericOutput(message, Colors.Yellow, TypeError.Warn);
    }

    static info(message: MessageLogger) {
        this.genericOutput(message, Colors.Green, TypeError.Info);
    }

    static debug(message: MessageLogger) {
        this.genericOutput(message, Colors.Cyan, TypeError.Debug);
    }

    static log(message: MessageLogger) {
        this.genericOutput(message, Colors.White, TypeError.Log);
    }

    static genericOutput(message: MessageLogger, color: string, type: string) {

        let contentMessage = message as string;

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
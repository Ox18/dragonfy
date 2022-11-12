import { Router } from "express";
import { readdirSync } from "fs";

export default (app: any, path: string): void => {
    const router = Router();
    app.use("/", router);
    readdirSync(path).map(async (file) => {
        if (!file.endsWith(".map")) {
            (await require(`${path}/${file}`)).default(router);
        }
    });
};
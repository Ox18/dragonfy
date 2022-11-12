import { Express } from "express";
import { bodyParserMiddleware } from "../middlewares/bodyParserMiddleware";
import { bodyParserUrlMiddleware } from "../middlewares/bodyParserUrlMiddleware";
import { contentType } from "../middlewares/contentTypeMiddleware";
import { corsMiddleware } from "../middlewares/corsMiddleware";
import { morganMiddleware } from "../middlewares/morganMiddleware";

export default (app: Express): void => {
    app.use(corsMiddleware);
    app.use(contentType);
    app.use(bodyParserMiddleware);
    app.use(bodyParserUrlMiddleware);
    app.use(morganMiddleware);
}
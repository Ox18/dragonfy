import express from "express";
import { Express } from "express";

import setupRouter from "./config/routeCheckerConfig"
import setupMiddlewares from "./config/middlewareConfig"
import { Logger } from "./logger";

export const health = (pathRoutes: string, env: any): Express => {
    const app = express();

    setupMiddlewares(app);
    setupRouter(app, pathRoutes);
    Logger.info(`Server running on port ${env.PORT} - ${env?.name || "uknown"}`);
    return app;
}
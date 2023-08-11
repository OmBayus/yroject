import { Express } from "express";

import example from "./example/example.router";

export default (app: Express) => {
  app.use("/example", example);
};

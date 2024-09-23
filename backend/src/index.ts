import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import auth from "../routes/auth";

import { errorMiddleware } from "./middlewares/error";
import {
  ApiError,
  BadRequestError,
  UnauthorizedError,
} from "./errors/api-errors";

const app = express();
app.use(express.json());

app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(errorMiddleware);

app.listen(5656, () => {
  console.log("Server is running on port 5656");
});

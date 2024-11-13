import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import auth from "../src/routes/auth";
import dashboard from "../src/routes/dashboard";
import aluno_info from "../src/routes/aluno_info";

var cors = require("cors");
import { errorMiddleware } from "./middlewares/error";
import {
  ApiError,
  BadRequestError,
  UnauthorizedError,
} from "./errors/api-errors";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);

app.use("/api/dashboard", authMiddleware, dashboard);

app.use("/api/aluno", authMiddleware, aluno_info);

// app.use(errorMiddleware);

app.listen(5656, () => {
  console.log("Server is running on port 5656");
});

import express, { Request, Response, Router } from "express";
import { register } from "../src/controllers/auth";

const router = express.Router();

router.route("/register").get(register);

export default router;

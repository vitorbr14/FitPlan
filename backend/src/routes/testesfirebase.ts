import express, { Request, Response, Router } from "express";
import { testesfirebase } from "../controllers/teste";

const router = express.Router();

router.route("/").get(testesfirebase);
export default router;

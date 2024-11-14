import express, { Request, Response, Router } from "express";
import { novotreino } from "../controllers/create_treino";

const router = express.Router();

router.route("/").get(novotreino);

export default router;

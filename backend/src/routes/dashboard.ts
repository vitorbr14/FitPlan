import express, { Request, Response, Router } from "express";

import { dashboard, getAlunos, newAluno } from "../controllers/dashboard";
const router = express.Router();

router.route("/alunos").get(getAlunos);
router.route("/newaluno").post(newAluno);

export default router;

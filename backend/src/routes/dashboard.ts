import express, { Request, Response, Router } from "express";

import { createProfessor, dashboard, getAlunos, getProfessores, newAluno } from "../controllers/dashboard";
const router = express.Router();

router.route("/alunos").get(getAlunos);
router.route("/newaluno").post(newAluno);
router.route("/newprofessor").post(createProfessor);
router.route("/professores").get(getProfessores);
export default router;

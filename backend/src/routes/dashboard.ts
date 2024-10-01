import express, { Request, Response, Router } from "express";

import { dashboard, getAlunos } from "../../controllers/dashboard";
const router = express.Router();

router.route("/alunos").get(getAlunos);

export default router;

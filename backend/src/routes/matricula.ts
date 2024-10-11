import express, { Request, Response, Router } from "express";

import {
  getMatriculaAluno,
  getPlanos,
  novaMatricula,
} from "../controllers/matricula";

const router = express.Router();

router.route("/").post(novaMatricula);
router.route("/planos").get(getPlanos);
router.route("/:aluno_id").get(getMatriculaAluno);

export default router;

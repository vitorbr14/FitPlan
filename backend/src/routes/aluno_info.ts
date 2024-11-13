import express, { Request, Response, Router } from "express";
import { aluno_general_info } from "../controllers/aluno_info";
import {
  getMatriculaAluno,
  getPlanos,
  novaMatricula,
} from "../controllers/matricula";
import {
  getCobrancaAluno,
  getSingleCobranca,
  novaCobranca,
} from "../controllers/cobrancas";

const router = express.Router();

// INFOS DOS ALUNOS
router.route("/alunoinfo/:id").get(aluno_general_info);

// MATRICULAS
router.route("/novaMatricula").post(novaMatricula); // ? FUNFOU
router.route("/planos").get(getPlanos);
router.route("/matricula/:aluno_id").get(getMatriculaAluno); // ? FUNFOU

// COBRANÇAS
router.route("/cobranca/:id").get(getCobrancaAluno); // ? FUNFOU
router.route("/cobranca/:id").post(novaCobranca); // ? FUNFOU
router.route("/cobranca/get/:id").get(getSingleCobranca);
export default router;

import express, { Request, Response, Router } from "express";
import {
  getDiaTreino,
  getExercicios,
  getFrequencia,
  getGruposMusculares,
  getObjetivos,
  getSets,
  getSingleTreino,
  getTreinosAluno,
  novotreino,
} from "../controllers/create_treino";

const router = express.Router();

router.route("/").post(novotreino);
router.route("/objetivos").get(getObjetivos);
router.route("/frequencia").get(getFrequencia);
router.route("/grupos").get(getGruposMusculares);
router.route("/exercicios").get(getExercicios);
router.route("/sets").get(getSets);
router.route("/dia_treino").get(getDiaTreino);
router.route("/:id").get(getTreinosAluno);
router.route("/single/:id").get(getSingleTreino);
export default router;

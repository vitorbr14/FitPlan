import express, { Request, Response, Router } from "express";

import { createAdmin, createGym } from "../controllers/auth";
import {
  getCobrancaAluno,
  getSingleCobranca,
  novaCobranca,
} from "../controllers/cobrancas";
const router = express.Router();

router.route("/:id").get(getCobrancaAluno);
router.route("/:id").post(novaCobranca);
router.route("/cobranca/:id").get(getSingleCobranca);
export default router;

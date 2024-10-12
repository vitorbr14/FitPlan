import express, { Request, Response, Router } from "express";

import { createAdmin, createGym } from "../controllers/auth";
import { getCobrancaAluno, novaCobranca } from "../controllers/cobrancas";
const router = express.Router();

router.route("/:id").get(getCobrancaAluno);
router.route("/:id").post(novaCobranca);
export default router;

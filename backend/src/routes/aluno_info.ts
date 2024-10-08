import express, { Request, Response, Router } from "express";
import { aluno_general_info } from "../controllers/aluno_info";

const router = express.Router();

router.route("/:id").get(aluno_general_info);

export default router;

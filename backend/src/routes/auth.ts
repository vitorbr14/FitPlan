import express, { Request, Response, Router } from "express";

import {
  createAdmin,
  createGym,
  editProfessor,
  login,
} from "../controllers/auth";
const router = express.Router();

router.route("/admin").post(createAdmin);
router.route("/gym").post(createGym);
router.route("/login").post(login);
router.route("/editprofessor").patch(editProfessor);
export default router;

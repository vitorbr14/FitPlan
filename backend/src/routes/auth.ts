import express, { Request, Response, Router } from "express";

import { createAdmin, createGym } from "../../controllers/auth";
const router = express.Router();

router.route("/admin").post(createAdmin);
router.route("/gym").post(createGym);

export default router;

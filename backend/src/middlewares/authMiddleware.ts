import { NextFunction } from "express";
import express, { Request, Response } from "express";
import admin from "../firebase";
import { UnauthorizedError } from "../errors/api-errors";
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedError("Usuário não autorizado.");
  }

  const token = authorization.split(" ")[1];
  const isloggedIn = admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      req.user_id = uid;
      next();
    })
    .catch((error) => {
      next(new UnauthorizedError("Usuário não autorizado."));
    });
};

import express, { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/api-errors";

export const errorMiddleware = (error: Error & Partial<ApiError>,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = error.statusCode ?? 500
    const message = error.statusCode ? error.message : 'Internal server Error'
    return res.status(statusCode).json({message})
  }
  
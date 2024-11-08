import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  try {
    if (res.headersSent) return next();

    return res.status(500).json({
      name: err.name,
      message: err.message,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};

import type { NextFunction, Request, Response } from "express";

export const errorMiddleware = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) return next(err);

  return res.status(500).json({
    name: err.name,
    message: err.message,
  });
};

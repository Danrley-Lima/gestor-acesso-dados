import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.message === "400") {
    res.status(400).json({ message: "Repositório não informado." });
  } else if (err.message === "404") {
    res.status(404).json({ message: "Repositório não encontrado." });
  } else {
    console.error(err);
    res.status(500).json({ message: "Erro interno de servidor." });
  }
}

export default errorMiddleware;

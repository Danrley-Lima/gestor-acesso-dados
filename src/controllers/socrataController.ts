import { NextFunction, Request, Response } from "express";
import { querySocrata } from "../services/socrataService";

export async function getSocrataData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { datasetId } = req.params;
    const queryParams = req.query;
    const data = await querySocrata(datasetId, queryParams);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

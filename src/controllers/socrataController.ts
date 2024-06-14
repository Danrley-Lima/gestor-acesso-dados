import { NextFunction, Request, Response } from "express";
import { queryResource } from "../services/socrataService";

export async function getResource(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { datasetId } = req.params;
    const data = await queryResource(datasetId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

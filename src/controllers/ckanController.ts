import { NextFunction, Request, Response } from "express";
import { queryCkan } from "../services/ckanService";

export async function getCkanData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { datasetId } = req.params;
    const queryParams = req.query;
    const data = await queryCkan(datasetId, queryParams);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

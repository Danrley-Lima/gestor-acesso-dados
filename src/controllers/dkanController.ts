import { NextFunction, Request, Response } from "express";
import { queryDkan } from "../services/dkanService";

export async function getDkanData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { datasetId } = req.params;
    const queryParams = req.query;
    const data = await queryDkan(datasetId, queryParams);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

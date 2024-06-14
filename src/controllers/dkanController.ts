import { NextFunction, Request, Response } from "express";
import { detailDataset, queryResource } from "../services/dkanService";

export async function getDatasetInformation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { datasetId } = req.params;
    const data = await detailDataset(datasetId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

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


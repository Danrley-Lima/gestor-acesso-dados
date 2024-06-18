import { NextFunction, Request, Response } from "express";
import { queryResource } from "../services/socrataService";
import { randomUUID } from "crypto";
import { sendResources } from "../services/responseService";
import ResponseData from "../types/responseData";

export async function getResource(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { datasetId } = req.params;
    const data = await queryResource(datasetId);

    const responseData: ResponseData = {
      id: randomUUID(),
      title: "Clima",
      database: "CKAN",
      data,
    };

    sendResources(responseData);
  } catch (error) {
    next(error);
  }
}

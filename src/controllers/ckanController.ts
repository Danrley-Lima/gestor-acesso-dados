import { randomUUID } from "crypto";
import { NextFunction, Request, Response } from "express";
import { queryResource } from "../services/ckanService";
import { sendResources } from "../services/responseService";
import ResponseData from "../types/responseData";

// export async function getDatasetInformation(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const { datasetId } = req.params;
//     const data = await detailDataset(datasetId);
//     res.status(200).json(data);
//   } catch (error) {
//     next(error);
//   }
// }

export async function getResource(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { resourceId } = req.params;
    const data = await queryResource(resourceId);

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

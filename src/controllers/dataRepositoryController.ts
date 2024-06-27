import { randomUUID } from "crypto";
import { NextFunction, Request, Response } from "express";
import { queryResource } from "../services/accessDataService";
import ResponseData from "../types/responseData";

export async function getResource(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let { repository } = req.body;

    if (!repository || typeof repository !== "string") {
      throw new Error("400");
    }

    repository = repository.toUpperCase();
    
    if (!["CKAN", "DKAN", "SOCRATA"].includes(repository)) {
      throw new Error("404");
    }

    const data = await queryResource(repository);
    const responseData: ResponseData = {
      id: randomUUID(),
      title: "Example Data",
      database: repository as "CKAN" | "DKAN" | "SOCRATA",
      data,
    };

    res.status(200).json(responseData);
  } catch (error) {
    next(error);
  }
}

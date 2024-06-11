import { NextFunction, Request, Response } from "express";
import { fetchData } from "../services/testService";

export async function testController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

import { Request, Response } from "express";
import { fetchData } from "../services/testService";

export async function testController(req: Request, res: Response) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

import { Router } from "express";
import { getSocrataData } from "../controllers/socrataController";

const router = Router();

router.get("/:datasetId", getSocrataData);

export default router;

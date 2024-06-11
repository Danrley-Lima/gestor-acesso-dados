import { Router } from "express";
import { getDkanData } from "../controllers/dkanController";

const router = Router();

router.get("/:datasetId", getDkanData);

export default router;

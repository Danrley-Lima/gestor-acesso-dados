import { Router } from "express";
import { getCkanData } from "../controllers/ckanController";

const router = Router();

router.get("/:datasetId", getCkanData);

export default router;

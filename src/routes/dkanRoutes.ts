import { Router } from "express";
import { getDatasetInformation, getResource } from "../controllers/dkanController";

const router = Router();

router.get("/dataset/:datasetId", getDatasetInformation);
router.get("/resource/:datasetId", getResource);

export default router;

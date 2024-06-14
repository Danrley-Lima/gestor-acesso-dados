import { Router } from "express";
import { getDatasetInformation, getResource } from "../controllers/ckanController";

const router = Router();

router.get("/dataset/:datasetId", getDatasetInformation);
router.get("/resource/:resourceId", getResource);

export default router;

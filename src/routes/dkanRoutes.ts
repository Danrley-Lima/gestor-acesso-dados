import { Router } from "express";
import { getResource } from "../controllers/dkanController";

const router = Router();

router.get("/resource/:datasetId", getResource);

export default router;

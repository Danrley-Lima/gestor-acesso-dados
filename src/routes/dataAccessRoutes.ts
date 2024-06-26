import { Router } from "express";
import { getResource } from "../controllers/dataRepositoryController";

const router = Router();

router.post("/resource", getResource);

export default router;
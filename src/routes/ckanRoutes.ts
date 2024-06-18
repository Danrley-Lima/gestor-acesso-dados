import { Router } from "express";
import { getResource } from "../controllers/ckanController";

const router = Router();

router.get("/resource/:resourceId", getResource);

export default router;

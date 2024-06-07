import { Router } from "express";
import { testController } from "../controllers/testController";

const testRouter = Router();

testRouter.get("/test", testController);

export default testRouter;

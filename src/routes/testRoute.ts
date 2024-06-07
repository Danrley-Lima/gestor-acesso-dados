import { Router } from "express";
import { testController } from "../controllers/testController";

const testRouter = Router();

/**
 * @swagger
 * /api/test:
 *  get:
 *    tags:
 *     - Test
 *    summary: Test API
 *    responses:
 *      200:
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Test' 

 *
 */
testRouter.get("/test", testController);

export default testRouter;

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import errorMiddleware from "./middleware/errorMiddleware";
import ckanRouter from "./routes/ckanRoutes";
import dkanRouter from "./routes/dkanRoutes";
import socrataRouter from "./routes/socrataRoutes";
import testRouter from "./routes/testRoute";
import { swaggerOptions } from "./utils/swaggerDefinition";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use(cors());

app.use("/api", testRouter);
app.use("/api/ckan", ckanRouter);
app.use("/api/dkan", dkanRouter);
app.use("/api/socrata", socrataRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

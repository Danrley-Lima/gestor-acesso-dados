import express from "express";
import testRouter from "./routes/testRoute";

const app = express();

app.use(express.json());

app.use("/api/", testRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

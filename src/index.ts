import express from "express";
import morgan from "morgan";
import cors from "cors";

import { errorHandler, notFoundHandler } from "./middleware/error.middleware";
import "./utils/init-env";
import "./utils/db/mysql.db";
import { routes } from "./routes";

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get("/idleBot", (req, res) => {
  res.status(200).json({
    code: 200,
    message: "Thanks for keeping me alive",
  });
});
app.use("/api", routes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

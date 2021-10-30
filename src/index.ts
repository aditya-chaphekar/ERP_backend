import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {itemsRouter} from "./items/items.router";
import {errorHandler,notFoundHandler} from "./middleware/error.middleware";

const app = express()
const port = process.env.PORT || 4001

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
app.use(errorHandler);
app.use(notFoundHandler);


app.get('/hello', (req, res) => {
    res.json({1: 'Hello World111111111!'})
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening at http://localhost:${port}`)
})
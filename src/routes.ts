import express from "express";
import {loginRouter} from "./api/login/login.router";
import {DemoRouter} from "./api/Demo/demo.router";

export const routes = express.Router();

routes.use("/login",loginRouter)
routes.use("/demo",DemoRouter)

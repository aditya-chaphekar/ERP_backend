import express from "express";
import {loginRouter} from "./api/login/login.router";

export const routes = express.Router();

routes.use("/login",loginRouter)
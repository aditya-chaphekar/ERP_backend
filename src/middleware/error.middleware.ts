import HttpException from "../common/http-exception";
import { Request, Response } from "express";
import {HttpConstants} from "../constants/http-constants";

export const errorHandler = (
    error: HttpException,
    request: Request,
    response: Response,
) => {
    const status = error.statusCode || error.status || 500;
    response.status(status).send(error);
};

export const notFoundHandler = (
    request: Request,
    response: Response,
) => {
    response.status(HttpConstants.NOT_FOUND.code).json(HttpConstants.NOT_FOUND);
};
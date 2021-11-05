import HttpException from "../common/http-exception";
import {NextFunction, Request, Response} from "express";
import {HttpConstants} from "../constants/http-constants";

export const errorHandler = (
    error: HttpException,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const status = error.statusCode || error.status || HttpConstants.INTERNAL.code;
    response.status(status).send(error);
    next();
};

export const notFoundHandler = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    response.status(HttpConstants.NOT_FOUND.code).json(HttpConstants.NOT_FOUND);
    next();
};
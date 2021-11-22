import {Response} from "express";
import {HttpConstants} from "../constants/http-constants";

export const successResponse = (res:Response, data:any) => {
    res.status(HttpConstants.SUCCESS.code).json(data);
}
export const failedResponse = (res:Response, err:any) => {
    res.status(HttpConstants.BAD_REQUEST.code).json({...HttpConstants.BAD_REQUEST, error: err});
}
import express, {Request, Response} from "express";
import {add, list, listOne, remove, update} from "./demo.service";
import {checkBlank, validateEmail} from "../../common/validation";
import {failedResponse, successResponse} from "../../common/responses";
import {HttpConstants} from "../../constants/http-constants";
import {ErrorConstants} from "../../constants/error-constants";

export const DemoRouter = express.Router();

DemoRouter.get("/list", async (req: Request, res: Response) => {
    try {
        const {code, message, data} = await list();
        successResponse(res,{code, message, data});
    } catch (e) {
        failedResponse(res, e)
    }
});

DemoRouter.get("/list/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const {code, message, data} = await listOne({id});
        successResponse(res,{code, message, data});
    } catch (e) {
        failedResponse(res, e)
    }
});

DemoRouter.post("/add", async (req: Request, res: Response) => {
    // tslint:disable-next-line:one-variable-per-declaration
    const name = req.body.name,
        email = req.body.email,
        password = req.body.password,
        classVar = req.body.classVar;

    if (checkBlank([name, email, password, classVar]))
        return successResponse(res, {...HttpConstants.BAD_REQUEST, ...ErrorConstants.MISSING_PARAM })

    if(!validateEmail(email))
        return successResponse(res, {...HttpConstants.BAD_REQUEST, ...ErrorConstants.INVALID_EMAIL })

    try {
        const {code, message, data} = await add({
            name,
            classVar,
            email,
            password,
        });
        successResponse(res,{code, message, data});
    } catch (e) {
        failedResponse(res, e)
    }
})

DemoRouter.post("/delete", async (req: Request, res: Response) => {
    // tslint:disable-next-line:one-variable-per-declaration
    const id = req.body.id;

    if (checkBlank([id]))
        return successResponse(res, {...HttpConstants.BAD_REQUEST, ...ErrorConstants.MISSING_PARAM })

    try {
        const {code, message, data} = await remove({id});
        successResponse(res,{code, message, data});
    } catch (e) {
        failedResponse(res, e)
    }
})

DemoRouter.post("/update",async (req: Request, res: Response) => {
    // tslint:disable-next-line:one-variable-per-declaration
    const id = req.body.id,
        name = req.body.name,
        email = req.body.email,
        password = req.body.password,
        classVar = req.body.classVar;

    if (checkBlank([id, name, email, password, classVar]))
        return successResponse(res, {...HttpConstants.BAD_REQUEST, ...ErrorConstants.MISSING_PARAM })

    if(!validateEmail(email))
        return successResponse(res, {...HttpConstants.BAD_REQUEST, ...ErrorConstants.INVALID_EMAIL })

    try {
        const {code, message, data} = await update({
            id,
            name,
            classVar,
            email,
            password,
        });
        successResponse(res,{code, message, data});
    } catch (e) {
        failedResponse(res, e)
    }
})

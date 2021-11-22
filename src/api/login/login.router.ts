import express, {Request, Response} from "express";
import {studentLogin, studentRegister} from "./login.service";
import {GeneralConstants} from "../../constants/general";
import {checkBlank} from "../../common/validation";
import {failedResponse, successResponse} from "../../common/responses";
import {HttpConstants} from "../../constants/http-constants";

export const loginRouter = express.Router();

loginRouter.post('/student', async (req: Request, res: Response) => {
    const email = req.body.email;
    const password= req.body.password;

    if (checkBlank([email, password]))
        return successResponse(res, {...HttpConstants.SUCCESS, message: GeneralConstants.MISSING_PARAMS})

    try {
        const {code, message, data} = await studentLogin({
            email,
            password,
        });
        successResponse(res,{code, message, data});
    } catch (e) {
        failedResponse(res, e)
    }
});

loginRouter.put('/student', async (req: Request, res: Response) => {

    const email= req.body.email;
    const password= req.body.password;
    const name= req.body.name;
    const studentClass = req.body.class;

    if (checkBlank([email, password, name, studentClass]))
        return successResponse(res, {...HttpConstants.SUCCESS, message: GeneralConstants.MISSING_PARAMS})

    try {
        const {code, message, data} = await studentRegister({
            email,
            password,
            name,
            class: studentClass,
        });
        successResponse(res,{code, message, data});
    } catch (e) {
        failedResponse(res, e)
    }
});
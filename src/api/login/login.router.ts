import express, {Request, Response} from "express";
import {studentLogin, studentRegister} from "./login.service";
import {HttpConstants} from "../../constants/http-constants";
import {checkBlank} from "../../common/validation";

export const loginRouter = express.Router();

loginRouter.post('/student', async (req: Request, res: Response) => {
    const email = req.body.email;
    const password= req.body.password;

    if (checkBlank([email, password]))
        return res.status(HttpConstants.BAD_REQUEST.code).json(HttpConstants.BAD_REQUEST)

    try {
        const {code, message, data} = await studentLogin({
            email,
            password,
        });
        res.status(code).json({code, message, data});
    } catch (e) {
        res.status(HttpConstants.BAD_REQUEST.code).json(HttpConstants.BAD_REQUEST);
    }
});

loginRouter.put('/student', async (req: Request, res: Response) => {

    const email= req.body.email;
    const password= req.body.password;
    const name= req.body.name;
    const studentClass = req.body.class;

    if (checkBlank([email, password, name, studentClass]))
        return res.status(HttpConstants.BAD_REQUEST.code).json(HttpConstants.BAD_REQUEST)

    try {
        const {code, message, data} = await studentRegister({
            email,
            password,
            name,
            class: studentClass,
        });
        res.status(code).json({code, message, data});
    } catch (e) {
        res.status(HttpConstants.BAD_REQUEST.code).json(HttpConstants.BAD_REQUEST);
    }

});
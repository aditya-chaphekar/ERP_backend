import {getRepository} from "typeorm";

import {LoginInterface, RegisterInterface, StudentLogin} from "./login.interface";
import {Student} from "../../../schemas/entity/Student";
import {HttpConstants} from "../../constants/http-constants";
import {LoginConstants} from "./login.constants";

export const studentLogin = async (credentials: LoginInterface): Promise<StudentLogin> => {
    try {
        const checkEmail = await getRepository(Student).findOne({email: credentials.email})
        if (checkEmail) {
            const checkPass = await getRepository(Student).findOne({
                email: credentials.email,
                password: credentials.password
            })
            if (checkPass)
                return {
                    code: HttpConstants.SUCCESS.code,
                    message: HttpConstants.SUCCESS.message,
                    data: checkEmail
                }
            else
                return {
                    code: HttpConstants.UNAUTHORIZED.code,
                    message: LoginConstants.INCORRECT_PASS,
                    data: []
                }
        } else
            return {
                code: HttpConstants.UNAUTHORIZED.code,
                message: LoginConstants.USER_NOT_FOUND,
                data: []
            }
    } catch (e) {
        return {
            code: HttpConstants.BAD_REQUEST.code,
            message: HttpConstants.BAD_REQUEST.message,
            data: []
        };
    }
}

export const studentRegister = async (credentials: RegisterInterface) => {
    try {
        const checkEmail = await getRepository(Student).findOne({email: credentials.email})
        if (checkEmail)
            return {
                code: HttpConstants.UNAUTHORIZED.code,
                message: LoginConstants.USER_ALREADY_EXISTS,
                data: []
            }
        else {
            await getRepository(Student).insert({
                email: credentials.email,
                password: credentials.password,
                name: credentials.name,
                class: credentials.class,
                createdAt: new Date(),
            })
            return {
                code: HttpConstants.SUCCESS.code,
                message: LoginConstants.USER_CREATED,
                data: []
            }
        }
    } catch (e) {
        return {
            code: HttpConstants.BAD_REQUEST.code,
            message: HttpConstants.BAD_REQUEST.message,
            data: []
        };
    }
}
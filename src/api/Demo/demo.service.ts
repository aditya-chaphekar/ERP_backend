import {getRepository} from "typeorm";

import {ListOne, StudentLogin} from "./demo.interface";
import {Student} from "../../../schemas/entity/Student";
import {HttpConstants} from "../../constants/http-constants";
import {DemoConstants} from "./demo.constants";

export const list = async (): Promise<StudentLogin> => {
    try {
        const data = await getRepository(Student).find();
        if (data) {
            return {
                code: HttpConstants.SUCCESS.code,
                message: HttpConstants.SUCCESS.message,
                data
            };
        }
        else {
            return {
                code: HttpConstants.BAD_REQUEST.code,
                message: DemoConstants.NO_DATA,
            };
        }
    } catch (e) {
        return {
            code: HttpConstants.BAD_REQUEST.code,
            message: e,
        };
    }
};
export const listOne = async ({id}: ListOne): Promise<StudentLogin> => {
    try {
        const data = await getRepository(Student).findOne({id: parseInt(id,10)});
        if (data) {
            return {
                code: HttpConstants.SUCCESS.code,
                message: HttpConstants.SUCCESS.message,
                data
            };
        } else
            return {
                code: HttpConstants.BAD_REQUEST.code,
                message: DemoConstants.NO_DATA,
            };
    } catch (e) {
        return {
            code: HttpConstants.BAD_REQUEST.code,
            message: e,
        };
    }
}
export const add = async ({name, classVar, email, password}): Promise<StudentLogin> => {
    try {
        const data = await getRepository(Student).save({name, classVar, email, password});
        if (data) {
            return {
                code: HttpConstants.SUCCESS.code,
                message: HttpConstants.SUCCESS.message,
            };
        } else
            return {
                code: HttpConstants.BAD_REQUEST.code,
                message: DemoConstants.NO_DATA,
            };
    } catch (e) {
        return {
            code: HttpConstants.BAD_REQUEST.code,
            message: e,
        };
    }
}
export const remove = async  ({id}: ListOne): Promise<StudentLogin> => {
    try {
        const data = await getRepository(Student).delete({id: parseInt(id,10)});
        if (data) {
            return {
                code: HttpConstants.SUCCESS.code,
                message: HttpConstants.SUCCESS.message,
            };
        } else
            return {
                code: HttpConstants.BAD_REQUEST.code,
                message: DemoConstants.NO_DATA,
            };
    } catch (e) {
        return {
            code: HttpConstants.BAD_REQUEST.code,
            message: e,
        };
    }
}
export const update = async ({id,name, classVar, email, password}): Promise<StudentLogin> => {
    try {
        const data = await getRepository(Student).update({id: parseInt(id,10)}, {name, classVar, email, password});
        if (data) {
            return {
                code: HttpConstants.SUCCESS.code,
                message: HttpConstants.SUCCESS.message,
            };
        } else
            return {
                code: HttpConstants.BAD_REQUEST.code,
                message: DemoConstants.NO_DATA,
            };
    } catch (e) {
        return {
            code: HttpConstants.BAD_REQUEST.code,
            message: e,
        };
    }
}

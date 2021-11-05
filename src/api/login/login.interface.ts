export interface LoginInterface {
    email: string,
    password: string,
}

export interface RegisterInterface {
    email: string,
    password: string,
    name: string,
    class: string,
}

export interface StudentLogin {
    code: number,
    message?: string,
    data: object,
}
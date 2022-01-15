export interface ListOne {
    id: string;
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
    data?: object,
}

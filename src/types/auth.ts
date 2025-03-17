export type LoginType = {
    email: string;
    password: string;
}

export type RegisterUserType = {
    email: string;
    password: string;
    username: string;
    passwordConfirm?: string;
}
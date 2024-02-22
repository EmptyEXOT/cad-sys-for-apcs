export interface SignUpSchema {
    name: string,
    password: string,
    repeatPassword: string,
    isPasswordEqual: boolean,
    isLoading: boolean,
    email: string
    error: SignUpError
}

export interface SignUpError {
    statusCode: number,
    message: string,
}
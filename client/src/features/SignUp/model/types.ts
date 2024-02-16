export interface SignUpSchema {
    name: string,
    password: string,
    isLoading: boolean,
    email: string
    error: SignUpError
}

export interface SignUpError {
    statusCode: number,
    message: string,
}
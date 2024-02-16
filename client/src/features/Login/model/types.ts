export interface LoginSchema {
    username: string;
    password: string;
    error: LoginError;
    isLoading: boolean;
}

export interface LoginError {
    statusCode: number,
    message: string,
}
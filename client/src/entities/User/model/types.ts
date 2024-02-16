export interface AuthData {
    accessToken: string,
    refreshToken: string,
}

export interface UserSchema {
    name: string,
    authData: AuthData
}
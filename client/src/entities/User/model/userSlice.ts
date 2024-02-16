import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthData, UserSchema} from "./types";
import {action} from "@storybook/addon-actions";
import {ACCESS_TOKEN, REFRESH_TOKEN, USERNAME} from "@/shared/const/localstorage";

const initialState: UserSchema = {
    name: null,
    authData: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
          state.name = action.payload
        },
        setAuthData: (state, action: PayloadAction<AuthData>) => {
            state.authData = action.payload
        },
        clearAuthData: (state) => {
          state.authData = null;
          state.name = null;
          localStorage.clear()
        },
        initAuthData: (state) => {
            const authData: AuthData = {
                refreshToken: localStorage.getItem(REFRESH_TOKEN),
                accessToken: localStorage.getItem(ACCESS_TOKEN),
            }
            if (authData.accessToken && authData.refreshToken) {
                state.authData = authData
                state.name = localStorage.getItem(USERNAME)
            }
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice
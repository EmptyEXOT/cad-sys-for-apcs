import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "@/features/Login/model/types";
import {log} from "next/dist/server/typescript/utils";
import {loginService} from "@/features/Login/services/loginService";

const initialState: LoginSchema = {
    username: '',
    password: '',
    error: null,
    isLoading: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginService.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(loginService.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice
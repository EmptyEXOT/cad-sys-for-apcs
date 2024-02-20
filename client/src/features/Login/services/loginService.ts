import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {LoginError} from "@/features/Login/model/types";
import {ACCESS_TOKEN, REFRESH_TOKEN, USERNAME} from "@/shared/const/localstorage";
import {userActions} from "@/entities/User/model/userSlice";
import {modalActions} from "@/widgets/Modal/model/modalSlice";

interface LoginBody {
    username: string,
    password: string;
}

interface LoginResponse {
    refreshToken: string,
    accessToken: string,
}

export const loginService = createAsyncThunk<LoginResponse, LoginBody, { rejectValue: LoginError }>(
    'signup/login',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post<LoginResponse>('http://localhost:5000/auth/login', data)

            if (!response.data) {
                throw new Error('Login Error')
            } else {
                localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
                localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
                localStorage.setItem(USERNAME, data.username)

                thunkAPI.dispatch(userActions.setAuthData(response.data))
                thunkAPI.dispatch(userActions.setName(data.username))
                thunkAPI.dispatch(modalActions.setIsOpen(false))

                return response.data
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {SignUpError} from "@/features/SignUp/model/types";
import {ACCESS_TOKEN, REFRESH_TOKEN, USERNAME} from "@/shared/const/localstorage";
import {userActions} from "@/entities/User/model/userSlice";
import {modalActions} from "@/widgets/Modal/model/modalSlice";

interface SignUpProps {
    name: string,
    password: string,
    email: string
}

interface SignUpResponse {
    refreshToken: string,
    accessToken: string,
}

export const signUpService = createAsyncThunk<SignUpResponse, SignUpProps, {rejectValue: SignUpError}>(
    'signUp/signUp',
    async (signUpData, thunkAPI) => {
        try {
            const response = await axios.post<SignUpResponse>('http://localhost:5000/auth/register', signUpData)
            if (!response.data) {
                throw new Error('response error')
            }

            localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
            localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
            localStorage.setItem(USERNAME, signUpData.name)

            thunkAPI.dispatch(userActions.setAuthData(response.data))
            thunkAPI.dispatch(userActions.setName(signUpData.name))
            thunkAPI.dispatch(modalActions.setIsOpen(false))
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)
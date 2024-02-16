import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SignUpSchema} from "@/features/SignUp/model/types";
import {signUpService} from "@/features/SignUp/services/signUpService";

const initialState: SignUpSchema = {
    password: '',
    name: '',
    email: '',
    isLoading: false,
    error: null
}

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpService.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(signUpService.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(signUpService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })


    }
})

export const {actions: signUpActions} = signUpSlice
export const {reducer: signUpReducer} = signUpSlice
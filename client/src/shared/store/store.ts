import {configureStore} from '@reduxjs/toolkit'
import {signUpReducer} from "@/features/SignUp/model/signUpSlice";
import {loginReducer} from "@/features/Login/model/LoginSlice";
import {userReducer} from "@/entities/User/model/userSlice";
import {modalReducer} from "@/widgets/Modal/model/modalSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            modal: modalReducer,
            signUp: signUpReducer,
            login: loginReducer,
            user: userReducer,
        },
    })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
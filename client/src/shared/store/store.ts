import {configureStore} from '@reduxjs/toolkit'
import modalReducer from '@/widgets/Modal/modalSlice'
import {signUpApi} from "@/features/SignUpForm/services/signUp";
import {setupListeners} from "@reduxjs/toolkit/query";

export const makeStore = () => {
    return configureStore({
        reducer: {
            modal: modalReducer,
            [signUpApi.reducerPath]: signUpApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(signUpApi.middleware)
    })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
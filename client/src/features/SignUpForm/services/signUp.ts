import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Action} from "redux";
import {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/shared/store/store";
import {HYDRATE} from 'next-redux-wrapper'

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
    return action.type === HYDRATE
}

export const signUpApi = createApi({
    reducerPath: 'signUpApi',
    baseQuery: fetchBaseQuery({
            baseUrl: 'http://localhost:5000/'
        }
    ),
    endpoints: (builder)  => ({
        getTodoById: builder.query<Todo, any>({
            query: (id:number) => `users`
        })
    })
})

export const {
    useGetTodoByIdQuery
} = signUpApi;

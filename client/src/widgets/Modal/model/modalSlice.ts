import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ModalState} from "@/widgets/Modal/model/types";



const initialState: ModalState = {isOpen: false}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        },
    },
})

export const {actions: modalActions} = modalSlice
export const {reducer: modalReducer} = modalSlice
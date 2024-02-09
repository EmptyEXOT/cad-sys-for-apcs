import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface ModalState {
    isOpen: boolean
}

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

export const {setIsOpen} = modalSlice.actions
export default modalSlice.reducer
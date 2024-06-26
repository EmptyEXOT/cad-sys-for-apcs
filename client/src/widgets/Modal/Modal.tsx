'use client'

import React, {FC, KeyboardEvent, ReactNode, useEffect, useState} from 'react';
import classNames from "classnames";
import cls from "./Modal.module.scss"
import {set} from "immutable";
import StoreProvider from "@/shared/store/StoreProvider";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {modalActions} from "@/widgets/Modal/model/modalSlice";
import {modalStateSelector} from "@/widgets/Modal/model/selectors";

interface ModalProps {
    children?: ReactNode
    className?: string | undefined;
}

const Modal: FC<ModalProps> = (
    {
        children,
        ...props
    }
) => {
    const {isOpen} = useAppSelector(modalStateSelector)
    const dispatch = useAppDispatch()

    const onEscapeKeydown = (event: any) => {
        if (event.key === 'Escape') dispatch(modalActions.setIsOpen(false))
    }

    useEffect(() => {
        window.addEventListener('keydown', onEscapeKeydown)
        if (!isOpen) {
            window.removeEventListener('keydown', onEscapeKeydown)
        }
        return () => window.removeEventListener('keydown', onEscapeKeydown)
    }, [isOpen]);

    return (
        <>
            <div onClick={() => {
                dispatch(modalActions.setIsOpen(false))
            }}
                 className={classNames(isOpen ? ('fixed bg-gray-800 opacity-80 w-screen h-screen top-0 bottom-0 z-40') : 'hidden')}/>
            <div className={classNames(cls.modal, isOpen ? 'fixed z-50' : 'hidden', props.className)}>
                {children}
            </div>
        </>

    );
};

export default Modal;
'use client'

import React, {FC, ReactNode, useState} from 'react';
import classNames from "classnames";
import cls from "./Modal.module.scss"
import {set} from "immutable";

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
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <>
            <div onClick={() => {setIsOpen(prevState => !prevState)}} className={classNames(isOpen ? 'absolute bg-gray-500 opacity-30 w-screen h-screen top-0 bottom-0 z-40': 'hidden')} />
            <div className={classNames(cls.modal, isOpen ? 'absolute bg-amber-400 z-50' : 'hidden', props.className)}>

                {children}
            </div>
        </>

    );
};

export default Modal;
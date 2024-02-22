'use client'
import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from './ConfirmationForm.module.scss'

interface ConfirmationFormProps {
    children?: ReactNode
    className?: string | undefined;
}

export type ConfirmationFormComponent = FC<ConfirmationFormProps>

export const ConfirmationForm: ConfirmationFormComponent = (
    {
        children,
        className,
        ...props
    }
) => {
    return (
        <div className={classNames(cls.confirmationForm, '', className)}>
            confirmation
        </div>
    );
};
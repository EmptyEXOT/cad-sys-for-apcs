'use client'
import React, {FC, ReactNode, useCallback} from 'react';
import classNames from "classnames";
import cls from "./EmailForm.module.scss"
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {signUpActions} from "@/features/SignUp/model/signUpSlice";
import {selectSignUpBody} from "@/features/SignUp/model/selectors";
import Input from "@/shared/ui/Input/Input";
import Typo from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import {Link} from "@/navigation";

interface EmailFormProps {
    children?: ReactNode
    className?: string | undefined;
}

export type EmailFormComponent = FC<EmailFormProps>

export const EmailForm: EmailFormComponent = (
    {
        children,
        ...props
    }
) => {
    const dispatch = useAppDispatch()

    const {email} = useAppSelector(selectSignUpBody);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(signUpActions.setEmail(value));
    }, [dispatch])

    return (
        <div
            className={classNames(cls.emailForm, '', props.className)}>
            <Input className={classNames('h-7')} onChange={onChangeEmail} label={<Typo.H
                size={HeaderSize.h4} className={classNames('text-center')}>Sign up with email</Typo.H>} name={'email'}
                   value={email}/>
            <hr className={classNames('h-0.5 bg-neutral-400 my-5')}/>
            <div>
                <Typo.H className={classNames('self-center text-center')} size={HeaderSize.h4}>Already have an account?</Typo.H>
                <Typo.H className={classNames('self-center text-blue-700 text-center')} underline={true}
                        size={HeaderSize.h4}><Link href={"/login"}>Sign In</Link></Typo.H>
            </div>
        </div>
    );
};

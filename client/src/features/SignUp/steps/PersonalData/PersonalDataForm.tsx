'use client'
import React, {FC, ReactNode, useCallback} from 'react';
import classNames from "classnames";
import cls from "./PersonalDataForm.module.scss"
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {signUpActions} from "@/features/SignUp/model/signUpSlice";
import {selectSignUpBody} from "@/features/SignUp/model/selectors";
import Input from "@/shared/ui/Input/Input";
import Typo from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";

interface PersonalDataFormProps {
    children?: ReactNode
    className?: string | undefined;
}

export type PersonalDataFormComponent = FC<PersonalDataFormProps>

export const PersonalDataForm: PersonalDataFormComponent = (
    {
        children,
        ...props
    }
) => {
    const dispatch = useAppDispatch()

    const {name} = useAppSelector(selectSignUpBody);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(signUpActions.setUsername(value));
    }, [dispatch])

    return (
        <div
            className={classNames(cls.passwordForm, '', props.className)}>
            <Input className={classNames('h-7')} onChange={onChangeUsername} label={<Typo.H
                size={HeaderSize.h4}>Username</Typo.H>} name={'name'}
                   value={name}/>
        </div>
    );
};

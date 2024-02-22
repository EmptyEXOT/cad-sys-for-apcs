'use client'
import React, {FC, ReactNode, useCallback} from 'react';
import classNames from "classnames";
import cls from "./SignUpForm.module.scss"
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {signUpActions} from "@/features/SignUp/model/signUpSlice";
import {selectSignUpBody} from "@/features/SignUp/model/selectors";
import {signUpService} from "@/features/SignUp/services/signUpService";
import Input from "@/shared/ui/Input/Input";
import Button from "@/shared/ui/Button/Button";
import Typo, {TypoVariant} from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";

interface SignUpFormProps {
    children?: ReactNode
    className?: string | undefined;
}

const SignUpForm: FC<SignUpFormProps> = (
    {
        children,
        ...props
    }
) => {
    const dispatch = useAppDispatch()

    const {error, isLoading, isPasswordEqual, repeatPassword, ...signUpBody} = useAppSelector(selectSignUpBody);

    const onSubmit = useCallback(() => {
        dispatch(signUpService(signUpBody))
    }, [dispatch, signUpBody.name, signUpBody.email, signUpBody.password])

    const onChangeUsername = useCallback((value: string) => {
        dispatch(signUpActions.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(signUpActions.setPassword(value));
    }, [dispatch])

    const onChangeRepeatPassword = useCallback((value: string) => {
        dispatch(signUpActions.setRepeatPassword(value))
    }, [dispatch])

    const onChangeEmail = useCallback((value: string) => {
        dispatch(signUpActions.setEmail(value));
    }, [dispatch])

    return (
        <div
            className={classNames(cls.signupform, 'rounded-lg container max-w-80 bg-neutral-200 border-neutral-400 border p-4 flex flex-col gap-5', props.className)}>
            <Input className={classNames('h-7')} onChange={onChangeEmail} label={<Typo.H
                size={HeaderSize.h4}>Email</Typo.H>} name={'email'}
                   value={signUpBody.email}/>
            <Input className={classNames('h-7')} onChange={onChangeUsername} label={<Typo.H
                size={HeaderSize.h4}>Username</Typo.H>} name={'name'}
                   value={signUpBody.name}/>
            <div className={classNames('flex flex-col gap-2')}>
                <Input type={'password'} className={classNames('h-7')} onChange={onChangePassword} label={<Typo.H
                    size={HeaderSize.h4}>Password</Typo.H>} name={'password'}
                       value={signUpBody.password}/>
                <Input type={'password'} label={<Typo.H
                    size={HeaderSize.h5}>Repeat password</Typo.H>} className={classNames('h-7')} onChange={onChangeRepeatPassword} name={'password'}
                       value={repeatPassword}/>
                {!isPasswordEqual && <Typo.H variant={TypoVariant.Alert} size={HeaderSize.h5}>Еhe password does not match</Typo.H>}
            </div>
            <Button fill={true} className={classNames('py-2 rounded-md')} disabled={isLoading || !isPasswordEqual}
                    onClick={onSubmit}><Typo.H size={HeaderSize.h5} variant={TypoVariant.Light}>Sign
                In</Typo.H></Button>
            {error && <div>{error.statusCode}: {error.message}</div>}
        </div>
    );
};

export default SignUpForm;
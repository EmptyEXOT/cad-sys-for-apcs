'use client'
import React, {FC, ReactNode, useCallback} from 'react';
import classNames from "classnames";
import cls from "./SignUp.module.scss"
import Button from "@/shared/Button/Button";
import {hooks, useAppSelector} from "@/shared/store/hooks";
import {signUpActions} from "@/features/SignUp/model/signUpSlice";
import Input from "@/shared/Input/Input";
import {selectSignUpBody} from "@/features/SignUp/model/selectors";
import {signUpService} from "@/features/SignUp/services/signUpService";

interface SignUpFormProps {
    children?: ReactNode
    className?: string | undefined;
}

const SignUp: FC<SignUpFormProps> = (
    {
        children,
        ...props
    }
) => {
    const dispatch = hooks()

    const {error, isLoading, ...signUpBody} = useAppSelector(selectSignUpBody);

    const onSubmit = useCallback(() => {
        dispatch(signUpService(signUpBody))
    }, [dispatch, signUpBody.name, signUpBody.email, signUpBody.password])

    const onChangeUsername = useCallback((value: string) => {
        dispatch(signUpActions.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(signUpActions.setPassword(value));
    }, [dispatch])

    const onChangeEmail = useCallback((value: string) => {
        dispatch(signUpActions.setEmail(value));
    }, [dispatch])

    return (
        <div
            className={classNames(cls.signupform, 'bg-neutral-400 p-10 flex flex-col gap-5 min-w-96', props.className)}>
            <Input className={classNames('h-10 text-xl')} onChange={onChangeEmail} label={'Email'} name={'email'}
                   value={signUpBody.email}/>
            <Input className={classNames('h-10 text-xl')} onChange={onChangeUsername} label={'Username'} name={'name'}
                   value={signUpBody.name}/>
            <Input className={classNames('h-10 text-xl')} onChange={onChangePassword} label={'Password'} name={'password'}
                   value={signUpBody.password}/>
            <div>
                <Button disabled={isLoading} onClick={onSubmit}>Sign Up</Button>
            </div>
            {error && <div>{error.statusCode}: {error.message}</div>}
        </div>
    );
};

export default SignUp;
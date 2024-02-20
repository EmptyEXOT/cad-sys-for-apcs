'use client'
import React, {FC, ReactNode, useCallback} from 'react';
import classNames from "classnames";
import cls from "./Login.module.scss"
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {loginActions} from "@/features/Login/model/LoginSlice";
import {loginService} from "@/features/Login/services/loginService";
import {selectLoginInfo} from "@/features/Login/model/selectors";
import Input from "@/shared/ui/Input/Input";
import Button from "@/shared/ui/Button/Button";
import Typo, {TypoVariant} from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import {Link} from "@/navigation";

interface LoginFormProps {
    children?: ReactNode
    className?: string | undefined;
}

const LoginForm: FC<LoginFormProps> = (
    {
        children,
        ...props
    }
) => {
    const dispatch = useAppDispatch()
    const {error, isLoading, ...body} = useAppSelector(selectLoginInfo);

    const onNameChange = useCallback((value: string) => {
        dispatch(loginActions.setName(value))
    }, [dispatch])

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onSubmit = useCallback(() => {
        dispatch(loginService(body))
    }, [dispatch, body.username, body.password])

    return (
        <div
            className={classNames(cls.login, 'rounded-lg container max-w-80 bg-neutral-200 border-neutral-400 border p-4 flex flex-col gap-5', props.className)}>
            <Input name={'username'} onChange={onNameChange} className={classNames('h-7')}
                   label={<Typo.H
                       size={HeaderSize.h4}>Username</Typo.H>} value={body.username}/>
            <Input type={'password'} name={'password'} onChange={onPasswordChange}
                   className={classNames('h-7')}
                   label={
                       <div className={classNames('flex justify-between')}><Typo.H
                           size={HeaderSize.h4}>Password</Typo.H>
                           <Link className={classNames('self-center')} href={"/password_reset"}><Typo.H
                               size={HeaderSize.h6} className={classNames('text-blue-700')} underline={true}>Forgot
                               Password?</Typo.H>
                           </Link>
                       </div>
                   } value={body.password}/>
            <Button fill={true} className={classNames('py-2 rounded-md')} disabled={isLoading} onClick={onSubmit}><Typo.H size={HeaderSize.h5} variant={TypoVariant.Light}>Sign In</Typo.H></Button>
            {error && <div>{error.statusCode}: {error.message}</div>}
        </div>
    );
};

export default LoginForm;
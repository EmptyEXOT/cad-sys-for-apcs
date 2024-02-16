import React, {FC, ReactNode, useCallback} from 'react';
import classNames from "classnames";
import cls from "./Login.module.scss"
import Input from "@/shared/Input/Input";
import {hooks, useAppSelector} from "@/shared/store/hooks";
import {loginActions} from "@/features/Login/model/LoginSlice";
import {loginService} from "@/features/Login/services/loginService";
import {selectLoginInfo} from "@/features/Login/model/selectors";
import Button from '@/shared/Button/Button';

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
    const dispatch = hooks()
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
        <div className={classNames(cls.login, 'bg-neutral-400 p-10 flex flex-col gap-5 min-w-96', props.className)}>
            <Input name={'username'} onChange={onNameChange} className={classNames('h-10 text-xl')} label={'Username'} value={body.username}/>
            <Input name={'password'} onChange={onPasswordChange} className={classNames('h-10 text-xl')} label={'Password'} value={body.password}/>
            <Button disabled={isLoading} onClick={onSubmit}>Login</Button>
            {error && <div>{error.statusCode}: {error.message}</div>}
        </div>
    );
};

export default LoginForm;
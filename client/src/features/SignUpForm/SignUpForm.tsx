'use client'
import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from "./SignUpForm.module.scss"
import Button from "@/shared/Button/Button";

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
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form method={'POST'} action={''} onSubmit={onSubmit}
              className={classNames(cls.signupform, 'bg-neutral-400 p-10 flex flex-col gap-5 min-w-96', props.className)}>
            <label htmlFor={'usernameInput'}>Username</label>
            <input id={'usernameInput'} className={classNames('h-10 text-xl')} type="text" name={'username'}/>

            <label htmlFor={'usernamePassword'}>Password</label>
            <input id={'usernamePassword'} className={classNames('h-10 text-xl')} type="password" name={'password'}/>
            <div>
                <Button type={'submit'}>Sign In</Button>
            </div>
        </form>
    );
};

export default SignUpForm;
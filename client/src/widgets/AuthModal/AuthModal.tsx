'use client'
import React, {FC, ReactNode, useState} from 'react';
import classNames from "classnames";
import cls from "./AuthModal.module.scss"
import Modal from "@/widgets/Modal/Modal";
import Button from "@/shared/Button/Button";
import LoginForm from "@/features/Login/ui/LoginForm";
import SignUp from "@/features/SignUp/SignUp";

enum Form {
    Login = 'Auth',
    SignUp = 'SignUp',
}

interface AuthModalProps {
    children?: ReactNode
    className?: string | undefined;
}

const AuthModal: FC<AuthModalProps> = (
    {
        children,
        ...props
    }
) => {
    const [form, setForm] = useState<Form>(Form.Login)
    const switchForm = (form: Form) => () => {
        setForm(form)
    }

    return (

        <Modal className={classNames(cls.authmodal, 'bg-neutral-400 p-10 flex flex-col gap-5 min-w-96', props.className)}>
            <div>
                {(form === Form.Login)
                    ? <Button onClick={() => {setForm(Form.SignUp)}}>Sign Up</Button>
                    : <Button onClick={() => {setForm(Form.Login)}}>Login</Button>}
            </div>
            {(form === Form.Login)
                ? <LoginForm />
                : <SignUp />}
        </Modal>
    );
};

export default AuthModal;
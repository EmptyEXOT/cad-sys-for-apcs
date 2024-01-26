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
    return (
        <div className={classNames(cls.signupform, 'p-5 flex flex-col gap-5 min-w-96', props.className)}>
            <input type="text"/>
            <input type="text" name="" id=""/>
            <div>
                <Button>btn1</Button>
                <Button>btn1</Button>
            </div>
        </div>
    );
};

export default SignUpForm;
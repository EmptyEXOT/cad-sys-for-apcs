import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <button {...props} className={classNames('px-2 flex flex-col justify-center', props.className)}>
            {props.children}
        </button>
    );
};

export default Button;
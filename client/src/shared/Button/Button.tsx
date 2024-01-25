import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    border?: boolean;
    fill? : boolean;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <button {...props}
                className={classNames('text-2xl p-4 px-5 justify-center', props.className, props.border
                    ? 'border-black rounded border-solid' : '',
                    props.fill ? 'bg-black text-white' : '')}>
            {props.children}
        </button>
    );
};

export default Button;
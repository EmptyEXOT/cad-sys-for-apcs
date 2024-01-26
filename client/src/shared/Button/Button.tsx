'use client'
import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    border?: boolean;
    fill?: boolean;
}

const Button: FC<ButtonProps> = ({children, className, border, fill, ...props}) => {
    return (
        <button onClick={() => {console.log('press')}} {...props}
                className={classNames('text-2xl p-4 px-5 justify-center', className, border
                        ? 'border-black rounded border-solid' : '',
                    fill
                        ? 'bg-black text-white' : '',)}>
            {children}
        </button>
    );
};

export default Button;
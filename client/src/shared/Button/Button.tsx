import React, {FC, ReactNode} from 'react';

interface ButtonProps {
    children?: ReactNode
    className?: string | undefined;
}

const Button: FC<ButtonProps> = (
    {
        children,
        className,
        ...props
    }
) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default Button;
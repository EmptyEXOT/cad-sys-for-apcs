import React, {FC, InputHTMLAttributes, ReactNode} from 'react';
import classNames from "classnames";
import cls from "./Input.module.scss"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    children?: ReactNode
    className?: string | undefined;
    value?: string,
    label?: string,
    autofocus?: boolean,
    onChange?: (value: string) => void,
    placeholder?: string,
    type?: string,
}

const Input: FC<InputProps> = (
    {
        children,
        value,
        onChange,
        label,
        autofocus = false,
        placeholder = '',
        type = 'text',
        ...props
    }
) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <>
            {label && <label htmlFor={props.id}>{label}</label>}
            <input
                id={props.id}
                className={classNames(cls.input, '', props.className)}
                value={value}
                onChange={onChangeHandler}
                {...props}
            />
        </>

    );
};

export default Input;
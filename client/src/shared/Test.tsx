import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Tester.module.scss'

interface TestProps {
    children?: ReactNode
    className?: string | undefined;
}

const Test: FC<TestProps> = (
    {
        children,
        className,
        ...props
    }
) => {
    return (
        <div className={classNames('')}>
            {children}
        </div>
    );
};

export default Test;
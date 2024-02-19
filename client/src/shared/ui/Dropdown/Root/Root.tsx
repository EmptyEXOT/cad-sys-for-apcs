import React, {FC, ReactNode} from 'react';
import classNames from "classnames";

interface RootProps {
    className?: string
    children: ReactNode
}

const Root: FC<RootProps> = ({children, className, ...props}) => {
    return (
        <div className={classNames(className)}>
            {children}
        </div>
    );
};

export default Root;
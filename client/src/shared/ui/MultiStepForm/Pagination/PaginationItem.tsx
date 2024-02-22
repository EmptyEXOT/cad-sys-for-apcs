import React, {FC, ReactNode} from 'react';
import cls from './Paginantion.module.scss'
import classNames from "classnames";
interface PaginationItemProps {
    className?: string;
    children?: ReactNode;
    isActive: boolean;
}

const PaginationItem: FC<PaginationItemProps> = ({className, children, isActive, ...props}) => {
    return (
        <div className={classNames(cls.paginationItem, 'bg-neutral-300', className, isActive && cls.active)}>
            {children}
        </div>
    );
};

export default PaginationItem;
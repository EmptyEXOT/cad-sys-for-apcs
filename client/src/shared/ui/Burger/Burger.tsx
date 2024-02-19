import React, {FC, ReactNode, useState} from 'react';
import classNames from "classnames";
import cls from "./Burger.module.scss"

interface BurgerProps {
    children?: ReactNode
    className?: string | undefined;
    isOpen: boolean
}

const Burger: FC<BurgerProps> = (
    {
        children,
        isOpen = false,
        ...props
    }
) => {
    return (
        <div className={classNames(cls.navIcon, '', props.className, isOpen ? cls.open : '')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Burger;
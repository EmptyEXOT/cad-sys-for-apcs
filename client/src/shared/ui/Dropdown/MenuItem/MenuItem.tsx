'use client'
import React, {FC, forwardRef, HTMLAttributes, PropsWithChildren} from "react";
import Root from "@/shared/ui/Dropdown/Root/Root";
import classNames from "classnames";
import cls from './MenuItem.module.scss'

interface MenuItem {
    className?: string;
}

type Ref = HTMLDivElement

const MenuItem = forwardRef<Ref, MenuItem>(({children, className, ...props}, ref) => {
    return (
        <Root className={classNames(cls.menuItem, '', className)} {...props} ref={ref}>
            {children}
        </Root>
    );
});

export default MenuItem;
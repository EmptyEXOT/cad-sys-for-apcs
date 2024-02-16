import React, {FC, ReactElement} from 'react';
import classNames from "classnames";
import "../Typo.scss"
import {TypoProps, TypoVariant} from "@/shared/ui/Typo/Typo";

export enum HeaderSize {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

interface HeaderProps extends TypoProps {
    size?: HeaderSize,
}

export type HeaderComponent = FC<HeaderProps>

const Header: HeaderComponent = (
    {
        children,
        variant = TypoVariant.Primary,
        ...props
    }
): ReactElement | null => {
    props.size = props.size ?? HeaderSize.h1
    return (
        <props.size className={classNames(variant, props.bold ? 'font-extrabold' : '', props.className)}>
            {children}
        </props.size>
    )
}
export default Header;
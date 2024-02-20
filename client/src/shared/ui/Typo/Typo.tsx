import React, {FC, ReactElement, ReactNode} from 'react';
import classNames from "classnames";
import "./Typo.scss"
import H, {HComponent} from "@/shared/ui/Typo/Header/H";
import P, {PComponent} from "@/shared/ui/Typo/Paragraph/P";

export enum TypoVariant {
    Primary = 'typo-color-primary',
    Secondary = 'typo-color-secondary',
    Alert = 'typo-color-alert',
    Warning = 'typo-color-warning',
    Successful = 'typo-color-successful',
    Light = 'typo-color-light'
}

export interface TypoProps {
    children: ReactNode
    className?: string | undefined;
    variant?: TypoVariant,
    bold?: boolean,
    italics?: boolean,
    underline?: boolean,
}

export type TypoComponent = FC<TypoProps> & {
    H: HComponent,
    P: PComponent,
};

const Typo: TypoComponent = (
    {
        children,
        variant,
        ...props
    }
): ReactElement => {
    return (
        <></>
    );
};

Typo.H = H
Typo.P = P

export default Typo;
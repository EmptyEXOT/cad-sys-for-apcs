import React, {FC, ReactElement, ReactNode} from 'react';
import classNames from "classnames";
import "./Typo.scss"
import Header, {HeaderComponent} from "@/shared/ui/Typo/Header/Header";
import Paragraph, {ParagraphComponent} from "@/shared/ui/Typo/Paragraph/Paragraph";

export enum TypoVariant {
    Primary = 'typo-color-primary',
    Secondary = 'typo-color-secondary',
    Alert = 'typo-color-alert',
    Warning = 'typo-color-warning',
    Successful = 'typo-color-successful'
}

export interface TypoProps {
    children?: ReactNode
    className?: string | undefined;
    variant?: TypoVariant,
    bold?: boolean,
    italics?: boolean,
    underline?: boolean,
}

export type TypoComponent = FC<TypoProps> & {
    Header: HeaderComponent,
    Paragraph: ParagraphComponent,
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

Typo.Header = Header
Typo.Paragraph = Paragraph

export default Typo;
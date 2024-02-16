import React, {FC, ReactElement} from 'react';
import classNames from "classnames";
import "../Typo.scss"
import {TypoProps, TypoVariant} from "@/shared/ui/Typo/Typo";

interface ParagraphProps extends TypoProps {
}

export type ParagraphComponent = FC<ParagraphProps>

const Paragraph: ParagraphComponent = (
    {
        children,
        variant = TypoVariant.Primary,
        ...props
    }
): ReactElement | null => {
    return (
        <p className={classNames(variant, props.bold ? 'font-extrabold' : '', 'text-xl', props.className)}>
            {children}
        </p>
    )
}
export default Paragraph;
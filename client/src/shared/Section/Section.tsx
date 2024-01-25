import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Section.module.css'
import ImagePlaceholder, {ImgPlaceholderBgColor} from "@/shared/Placeholder/ImagePlaceholder/ImagePlaceholder";
import {Sections} from "@/shared/sections/sections";

export enum BgVariant {
    Default = 'default',
    Image = 'image',
}

interface SectionProps {
    className?: string | undefined;
    children: ReactNode;
    isFullWidth?: boolean;
    bg?: BgVariant;
    id: Sections;
}

const Section: FC<SectionProps> = (props) => {
    return (
        <div id={props.id} className={classNames('mx-auto px-4 leading-8', props.isFullWidth ? cls.fullWidth : 'container', props.className)}>
            {props.bg === BgVariant.Image ?
                <ImagePlaceholder bgColor={ImgPlaceholderBgColor.dark} classNames={'absolute -z-10 h-screen'}/> : null}
            {props.children}
        </div>
    );
};

export default Section;
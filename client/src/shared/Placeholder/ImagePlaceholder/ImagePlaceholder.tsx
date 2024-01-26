import React, {FC} from 'react';
import classNames from "classnames";
import Image from "next/image";
import Placeholder from "./assets/ImagePlaceholder.png"

export enum ImgPlaceholderBgColor {
    dark = 'bg-neutral-500',
    light = 'bg-neutral-200',
}

interface ImagePlaceholderProps {
    width?: number;
    height?: number;
    classNames?: string;
    bgColor?: ImgPlaceholderBgColor;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({bgColor = ImgPlaceholderBgColor.light, ...props}) => {
    return (
        <div className={classNames('w-full flex justify-center -z-10', props.classNames, bgColor)}>
            <div className={classNames('flex flex-col justify-center')}>
                <Image alt={'image placeholder'} src={Placeholder} width={props.width} height={props.height}></Image>
            </div>
        </div>
    );
};

export default ImagePlaceholder;
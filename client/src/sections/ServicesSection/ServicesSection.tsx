import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from "./ServicesSection.module.scss"
import Section from '@/shared/Section/Section';
import {Sections} from "@/shared/sections/sections";
import {useTranslations} from "next-intl";
import Button from "@/shared/Button/Button";
import ImagePlaceholder from "@/shared/Placeholder/ImagePlaceholder/ImagePlaceholder";

interface ServicesSectionProps {
    children?: ReactNode
    className?: string | undefined;
}

const ServicesSection: FC<ServicesSectionProps> = (
    {
        children,
        ...props
    }
) => {
    const t = useTranslations('Sections');

    return (
        <Section id={Sections.Feature} className={classNames('pt-24')}>
            <div className={classNames('flex flex-col gap-8')}>
                <h1 className={classNames('text-5xl font-bold leading-snug')}>
                    {t('Services.title')}
                </h1>
                <p className={classNames('text-2xl leading-normal')}>
                    {t('Services.description')}
                </p>
                <div className={classNames('flex gap-4 flex-col')}>
                    <Button border={true}>{t('Services.Buttons.learn_more')}</Button>
                    <Button border={false} fill={false}>{t('Services.Buttons.sign_up')}</Button>
                </div>
                <div className={classNames('flex flex-col justify-center lg:flex-1')}>
                    <div className={classNames('flex justify-center')}>
                        <div className={classNames('square')}>
                            <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ServicesSection;
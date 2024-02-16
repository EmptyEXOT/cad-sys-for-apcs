import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {Sections} from "@/shared/sections/sections";
import Section from "@/shared/Section/Section";
import {useTranslations} from 'next-intl';
import Button from "@/shared/ui/Button/Button";

interface HomeSectionProps {
    children?: ReactNode
    className?: string | undefined;
}

const HomeSection: FC<HomeSectionProps> = (
    {
        children,
        ...props
    }
) => {
    const t = useTranslations('Sections')

    return (
        <Section isFullWidth={true} id={Sections.Home}
                 className={classNames('h-full flex flex-col justify-center bg-gray-200')}>
            <Section id={Sections.Contacts}>
                <div className={classNames('pt-32 flex flex-col gap-8 pb-20')}>
                    <h1 className={classNames('text-5xl font-bold leading-snug')}>
                        {t('Cover.title')}
                    </h1>
                    <p className={classNames('text-2xl leading-normal')}>
                        {t('Cover.description')}
                    </p>
                    <div className={classNames('flex gap-4 flex-col')}>
                        <Button border={true}>{t('Cover.Buttons.learn_more')}</Button>
                        <Button border={true} fill={true}>{t('Cover.Buttons.sign_up')}</Button>
                    </div>
                </div>
            </Section>

        </Section>
    );
};

export default HomeSection;
'use client'
import React, {FC} from 'react';
import classNames from "classnames";
import cls from "@/widgets/Navbar/Navbar.module.scss";
import NavbarLink from "./NavbarLink";
import {Sections} from "@/shared/sections/sections";
import {useTranslations} from "next-intl";
import Typo, {TypoVariant} from "@/shared/ui/Typo/Typo";

interface MenuProps {
    isOpen: boolean
}

const Menu: FC<MenuProps> = (props) => {
    const t = useTranslations('Nav')

    return (
        <div
            className={classNames('fixed top-14 bg-neutral-200 pt-8 py-2 md:hidden justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md h-screen', props.isOpen ? cls.open : cls.close)}>
            <div className={classNames('container mx-auto pb-4')}>
                <NavbarLink offset={-70} to={Sections.Home}>{t('explore_products')}</NavbarLink>
                <NavbarLink offset={100} to={Sections.About}>{t('about')}</NavbarLink>
                <NavbarLink offset={60} to={Sections.Feature}>{t('contact_us')}</NavbarLink>
                <NavbarLink offset={100} to={Sections.Contacts}>{t('services')}</NavbarLink>
            </div>
            <div className={classNames('m-3 p-3 flex gap-5 flex-col border-solid border-amber-600 border-2')}>
                <Typo.Header className={classNames('text-2xl text-center')} bold={true} variant={TypoVariant.Warning}>Mobile
                    version is unavailable!</Typo.Header>
                <Typo.Paragraph bold={true} variant={TypoVariant.Warning} className={classNames('text-center')}>
                    The mobile version of the application is being developed. You can use the desktop version of the app
                    to log in.
                </Typo.Paragraph>
            </div>
        </div>
    );
};

export default Menu;
'use client'
import React, {FC} from 'react';
import classNames from "classnames";
import cls from "@/widgets/Navbar/Navbar.module.scss";
import NavbarLink from "./NavbarLink";
import {Sections} from "@/shared/sections/sections";
import {useTranslations} from "next-intl";

interface MenuProps {
    isOpen: boolean
}

const Menu: FC<MenuProps> = (props) => {
    const t = useTranslations('Nav')
    return (
            <div className={classNames('fixed top-14 bg-neutral-200 py-2 md:hidden justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md', props.isOpen ? cls.open : cls.close)}>
                <div className={classNames('container mx-auto')}>
                    <NavbarLink offset={-70} to={Sections.Home}>{t('home')}</NavbarLink>
                    <NavbarLink offset={100} to={Sections.About}>{t('about')}</NavbarLink>
                    <NavbarLink offset={60} to={Sections.Feature}>{t('feature')}</NavbarLink>
                    <NavbarLink offset={100} to={Sections.Contacts}>{t('contacts')}</NavbarLink>
                    <NavbarLink offset={170} to={Sections.Topics}>{t('topics')}</NavbarLink>
                    <NavbarLink offset={100} to={Sections.Gallery}>{t('gallery')}</NavbarLink>
                </div>
            </div>

    );
};

export default Menu;
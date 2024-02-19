'use client'
import React, {FC} from 'react';
import classNames from "classnames";
import NavbarLink from "../NavbarLink";
import {useTranslations} from "next-intl";
import Typo from "@/shared/ui/Typo/Typo";
import cls from './Menu.module.scss'
import Disclaimer from "@/widgets/Navbar/ui/Menu/Disclaimer";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import MenuSection from "@/widgets/Navbar/ui/Menu/MenuSection";

interface MenuProps {
    isOpen: boolean
}

const Menu: FC<MenuProps> = (props) => {
    const t = useTranslations('Nav')

    return (
        <div
            className={classNames(cls.menuWrapper, 'fixed flex gap-5 top-16 bottom-0 bg-neutral-200 pt-8 py-2 md:hidden justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md overflow-scroll', props.isOpen ? cls.open : cls.close)}>
            <div className={classNames(cls.menu, 'overflow-scroll', props.isOpen ? cls.open : cls.close)}>
                <Disclaimer />
                <MenuSection>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>{t('explore_products')}</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>{t('about')}</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>{t('contact_us')}</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>{t('services')}</Typo.H></NavbarLink>
                </MenuSection>
                <MenuSection header={'Our Solutions'}>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Automation</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Design</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Development</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Integration</Typo.H></NavbarLink>
                </MenuSection>
                <MenuSection header={'Industries We Serve'}>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Manufacturing</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Energy</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Pharmaceutical</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Food</Typo.H></NavbarLink>
                </MenuSection>
                <MenuSection header={'Resources and Support'}>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Documentation</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>FAQs</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Support</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Blog</Typo.H></NavbarLink>
                </MenuSection>
                <MenuSection header={'Additional Links'} className={classNames('bg-neutral-200')}>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 1</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 2</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 3</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 4</Typo.H></NavbarLink>
                </MenuSection>
            </div>

        </div>
    );
};

export default Menu;
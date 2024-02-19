'use client'
import React, {FC} from 'react';
import classNames from "classnames";
import NavbarLink from "../NavbarLink";
import {useTranslations} from "next-intl";
import Typo from "@/shared/ui/Typo/Typo";
import cls from './Menu.module.scss'
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import MenuSection from "@/widgets/Navbar/ui/Menu/MenuSection";
import Dropdown from "@/shared/ui/Dropdown/Dropdown";
import MenuItem from "@/shared/ui/Dropdown/MenuItem/MenuItem";
import {Disclaimer} from "./Disclaimer";
import Section from "@/shared/Section/Section";

interface MenuProps {
    isOpen?: boolean
}

const Menu: FC<MenuProps> = (props) => {
    const t = useTranslations('Nav')

    return (
        <div
            className={classNames(
                'fixed flex gap-5 top-16 bottom-0 md:bottom-auto bg-neutral-200 pt-8 justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md overflow-y-scroll',
                'md:pt-2 md:justify-evenly md:border-b-2 border-neutral-300',
                cls.menuWrapper,
                props.isOpen ? cls.open : cls.close)}>
            <div className={classNames('md:container')}>
                <div className={classNames(cls.menu, 'md:flex md:justify-between md:w-full', props.isOpen ? cls.open : cls.close)}>
                <Disclaimer/>
                <MenuSection className={classNames('md:hidden')}>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>{t('explore_products')}</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>{t('about')}</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>{t('contact_us')}</Typo.H></NavbarLink>
                    <Dropdown
                        className={classNames('bg-transparent')}
                        control={
                            <NavbarLink><Typo.H size={HeaderSize.h3}>Services</Typo.H></NavbarLink>
                        }
                    >
                        <MenuItem><Typo.H size={HeaderSize.h3}>Service 1</Typo.H></MenuItem>
                        <MenuItem><Typo.H size={HeaderSize.h3}>Service 2</Typo.H></MenuItem>
                        <MenuItem><Typo.H size={HeaderSize.h3}>Service 3</Typo.H></MenuItem>
                        <MenuItem><Typo.H size={HeaderSize.h3}>Service 4</Typo.H></MenuItem>
                    </Dropdown>
                </MenuSection>
                <MenuSection header={'Our Solutions'}>
                    <NavbarLink><Typo.H className={classNames('font-semibold')} size={HeaderSize.h3}>Automation</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')}
                                        size={HeaderSize.h3}>Design</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')}
                                        size={HeaderSize.h3}>Development</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')}
                                        size={HeaderSize.h3}>Integration</Typo.H></NavbarLink>
                </MenuSection>
                {/*<MenuSection header={'Industries We Serve'}>*/}
                {/*    <NavbarLink><Typo.H className={classNames('font-semibold')}*/}
                {/*                        size={HeaderSize.h3}>Manufacturing</Typo.H></NavbarLink>*/}
                {/*    <NavbarLink><Typo.H className={classNames('font-semibold')}*/}
                {/*                        size={HeaderSize.h3}>Energy</Typo.H></NavbarLink>*/}
                {/*    <NavbarLink><Typo.H className={classNames('font-semibold')}*/}
                {/*                        size={HeaderSize.h3}>Pharmaceutical</Typo.H></NavbarLink>*/}
                {/*    <NavbarLink><Typo.H className={classNames('font-semibold')}*/}
                {/*                        size={HeaderSize.h3}>Food</Typo.H></NavbarLink>*/}
                {/*</MenuSection>*/}
                <MenuSection header={'Resources and Support'}>
                    <NavbarLink><Typo.H className={classNames('font-semibold')}
                                        size={HeaderSize.h3}>Documentation</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')}
                                        size={HeaderSize.h3}>FAQs</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')}
                                        size={HeaderSize.h3}>Support</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H className={classNames('font-semibold')}
                                        size={HeaderSize.h3}>Blog</Typo.H></NavbarLink>
                </MenuSection>
                <MenuSection header={'Additional Links'} className={classNames('bg-neutral-200 md:bg-inherit')}>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 1</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 2</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 3</Typo.H></NavbarLink>
                    <NavbarLink><Typo.H size={HeaderSize.h3}>Link 4</Typo.H></NavbarLink>
                </MenuSection>
            </div>
            </div>

        </div>
    );
};

export default Menu;
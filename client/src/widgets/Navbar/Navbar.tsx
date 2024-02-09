'use client'

import React, {FC, ReactNode, useState} from 'react';
import classNames from "classnames";
import cls from "./Navbar.module.scss"
import NavbarLink from "@/widgets/Navbar/NavbarLink";
import {Sections} from "@/shared/sections/sections";
import MenuIcon from './Menu.svg'
import Logo from './Logo.svg'
import Image from 'next/image'
import Button from "@/shared/Button/Button";
import Menu from "@/widgets/Navbar/Menu";
import {useTranslations} from "next-intl";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import StoreProvider from "@/shared/StoreProvider";
import {setIsOpen as setIsOpenStore} from "@/widgets/Modal/modalSlice";

interface HeaderProps {
    children?: ReactNode
    className?: string | undefined;
}

const Navbar: FC<HeaderProps> = (
    {
        children,
        className,
        ...props
    }
) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const t = useTranslations('Nav')
    const dispatch = useAppDispatch()

    return (
        <>
            <div
                className={classNames('bg-neutral-100 md:bg-neutral-200 z-20 bg-opacity-100 md:bg-opacity-50 backdrop-blur-md', cls.navbar)}>
                <div className={classNames('container flex justify-between mx-auto px-4 py-2 z-20')}>
                    <div className={classNames('flex gap-10 justify-between w-full')}>
                        <Image alt={'logo'} src={Logo}></Image>
                        <div className={classNames('hidden md:flex justify-center')}>
                            <NavbarLink offset={-70} to={Sections.Home}>{t('explore_products')}</NavbarLink>
                            <NavbarLink offset={100} to={Sections.About}>{t('about')}</NavbarLink>
                            <NavbarLink offset={60} to={Sections.Feature}>{t('contact_us')}</NavbarLink>
                            <NavbarLink offset={100} to={Sections.Contacts}>{t('services')}</NavbarLink>
                        </div>
                        <div className={classNames('hidden md:flex flex gap-5')}>
                            <Button border={true}>Learn More</Button>
                            <Button onClick={() => {dispatch(setIsOpenStore(true))}} fill={true} border={true}>Sign Up</Button>
                        </div>
                    </div>

                    <Button onClick={() => setIsOpen(prevState => !prevState)} className={classNames('md:hidden pe-0')}>
                        <Image alt={'menu'} src={MenuIcon} width={36} height={24}></Image>
                    </Button>
                </div>
            </div>
            <Menu isOpen={isOpen}/>
        </>
    );
};

export default Navbar;
'use client'

import React, {FC, ReactNode, useEffect, useState} from 'react';
import classNames from "classnames";
import cls from "./Navbar.module.scss"
import NavbarLink from "@/widgets/Navbar/ui/NavbarLink";
import {Sections} from "@/shared/sections/sections";
import MenuIcon from './Menu.svg'
import Logo from './Logo.svg'
import Image from 'next/image'
import Menu from "@/widgets/Navbar/ui/Menu/Menu";
import {useTranslations} from "next-intl";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {userActions} from "@/entities/User/model/userSlice";
import {selectUserInfo} from "@/entities/User/model/selectors";
import {modalActions} from "@/widgets/Modal/model/modalSlice";
import {modalStateSelector} from "@/widgets/Modal/model/selectors";
import Button from "@/shared/ui/Button/Button";
import Burger from "@/shared/ui/Burger/Burger";

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
    const [isExtended, setIsExtended] = useState<boolean>(false)
    const t = useTranslations('Nav')
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(selectUserInfo)
    const {isOpen} = useAppSelector(modalStateSelector);
    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);

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
                        <div className={classNames('hidden md:flex gap-5')}>
                            <Button border={true}>Learn More</Button>
                            {userInfo.authData
                                ? <div>
                                    {userInfo.name}
                                    <Button onClick={() => dispatch(userActions.clearAuthData())}>Logout</Button>
                                </div>
                                : <Button onClick={() => {
                                    dispatch(modalActions.setIsOpen(true))
                                }} fill={true} border={true}>Sign Up</Button>
                            }
                        </div>
                    </div>

                    <Button onClick={() => setIsExtended(prevState => !prevState)}
                            className={classNames('md:hidden pe-0')}>
                        <Burger isOpen={isExtended}/>
                    </Button>
                </div>
            </div>
            <Menu isOpen={isExtended}/>
        </>
    );
};

export default Navbar;
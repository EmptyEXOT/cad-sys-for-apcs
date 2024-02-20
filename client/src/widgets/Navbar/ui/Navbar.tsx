'use client'

import React, {FC, ReactNode, useEffect, useState} from 'react';
import classNames from "classnames";
import cls from "./Navbar.module.scss"
import Logo from '@/public/Logo.svg'
import Image from 'next/image'
import Menu from "@/widgets/Navbar/ui/Menu/Menu";
import {useTranslations} from "next-intl";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {userActions} from "@/entities/User/model/userSlice";
import {selectUserInfo} from "@/entities/User/model/selectors";
import {modalStateSelector} from "@/widgets/Modal/model/selectors";
import Button from "@/shared/ui/Button/Button";
import Burger from "@/shared/ui/Burger/Burger";
import Typo, {TypoVariant} from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import {Link} from "@/navigation";

interface HeaderProps {
    children?: ReactNode
    className?: string | undefined;
}

export const Navbar: FC<HeaderProps> = (
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
                    <div className={classNames('flex')}>
                        <div className={classNames('flex flex-col justify-center w-full')}>
                            <Image alt={'logo'} src={Logo}></Image>
                        </div>
                    </div>
                    <div className={classNames('flex gap-2')}>
                        <Link
                            className={classNames('hidden md:flex flex-col justify-center border-2 border-black p-2 rounded-md h-max self-center')}
                            href={'/login'}>
                            <Typo.H size={HeaderSize.h3}>Sign In</Typo.H>
                        </Link>
                        <Button onClick={() => setIsExtended(prevState => !prevState)}
                                className={classNames('pe-0 md:px-4 md:py-2 md:rounded-md md:bg-black')}>
                            <Burger className={classNames('md:hidden')} isOpen={isExtended}/>
                            <Typo.H className={classNames('hidden md:block')} size={HeaderSize.h3} variant={TypoVariant.Light}>Menu</Typo.H>
                        </Button>
                    </div>
                </div>
            </div>
            <Menu isOpen={isExtended}/>
        </>
    );
};
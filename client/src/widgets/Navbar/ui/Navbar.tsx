'use client'

import React, {FC, ReactNode, useEffect, useState} from 'react';
import classNames from "classnames";
import cls from "./Navbar.module.scss"
import Logo from './Logo.svg'
import Image from 'next/image'
import Menu from "@/widgets/Navbar/ui/Menu/Menu";
import {useTranslations} from "next-intl";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {userActions} from "@/entities/User/model/userSlice";
import {selectUserInfo} from "@/entities/User/model/selectors";
import {modalStateSelector} from "@/widgets/Modal/model/selectors";
import Button from "@/shared/ui/Button/Button";
import Burger from "@/shared/ui/Burger/Burger";
import Typo from "@/shared/ui/Typo/Typo";
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
                        <Link className={classNames('hidden md:flex flex-col justify-center bg-black p-2 rounded-md h-max self-center')} href={'/auth'}>
                            <Typo.H className={classNames('text-white')} size={HeaderSize.h2}>Register</Typo.H>
                        </Link>
                        <Button onClick={() => setIsExtended(prevState => !prevState)}
                                className={classNames('pe-0')}>
                            <Burger isOpen={isExtended}/>
                        </Button>
                    </div>
                </div>
            </div>
            <Menu isOpen={isExtended}/>
        </>
    );
};
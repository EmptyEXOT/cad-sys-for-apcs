'use client'
import React, {FC} from 'react';
import classNames from "classnames";
import cls from "@/widgets/Navbar/Navbar.module.scss";
import NavbarLink from "./NavbarLink";
import {Sections} from "@/shared/sections/sections";
import {useTranslations} from "next-intl";
import Button from "@/shared/Button/Button";
import {userActions} from "@/entities/User/model/userSlice";
import {modalActions} from "@/widgets/Modal/model/modalSlice";
import {hooks, useAppSelector} from "@/shared/store/hooks";
import {selectUserInfo} from "@/entities/User/model/selectors";

interface MenuProps {
    isOpen: boolean
}

const Menu: FC<MenuProps> = (props) => {
    const t = useTranslations('Nav')
    const dispatch = hooks()
    const userInfo = useAppSelector(selectUserInfo)

    return (
        <div
            className={classNames('fixed top-14 bg-neutral-200 py-2 md:hidden justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md h-screen', props.isOpen ? cls.open : cls.close)}>
            <div className={classNames('container mx-auto')}>
                <NavbarLink offset={-70} to={Sections.Home}>{t('explore_products')}</NavbarLink>
                <NavbarLink offset={100} to={Sections.About}>{t('about')}</NavbarLink>
                <NavbarLink offset={60} to={Sections.Feature}>{t('contact_us')}</NavbarLink>
                <NavbarLink offset={100} to={Sections.Contacts}>{t('services')}</NavbarLink>
            </div>
            <div className={classNames('flex gap-5')}>
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
    );
};

export default Menu;
import classNames from "classnames";
import Logo from '@/public/Logo.svg'
import Image from 'next/image'
import Typo from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import React from "react";
import LoginForm from "@/features/Login/ui/LoginForm";
import StoreProvider from "@/shared/store/StoreProvider";

export default function PasswordResetPage() {
    return (
        <main className={classNames('flex flex-col h-screen')}>
            <div className={classNames('self-center')}>
                <Image alt={'Logo'} src={Logo} width={100}/>
            </div>
            <div className={classNames('self-center')}>
                <Typo.H size={HeaderSize.h2}>Sign In to CAS sys for APCS</Typo.H>
            </div>
            <StoreProvider>
                <LoginForm className={classNames('self-center')}></LoginForm>
            </StoreProvider>
        </main>
    )
}
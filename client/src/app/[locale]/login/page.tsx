import classNames from "classnames";
import Logo from '@/public/Logo.svg'
import Image from 'next/image'
import Typo from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import React from "react";
import LoginForm from "@/features/Login/ui/LoginForm";
import StoreProvider from "@/shared/store/StoreProvider";
import cls from "@/features/Login/ui/Login.module.scss";
import {Disclaimer} from "@/widgets/Navbar/ui/Menu/Disclaimer";
import {Link} from "@/navigation";
import Return from '@/public/Return.png'

export default function LoginPage() {
    return (
        <>
            <main>
                <div className={classNames('container mx-auto hidden sm:flex flex-col gap-5 py-8')}>
                    <div className={classNames('self-center')}>
                        <Link href={"/"}>
                            <Image alt={'Logo'} src={Logo} width={100}/>
                        </Link>
                    </div>
                    <div className={classNames('self-center')}>
                        <Typo.H size={HeaderSize.h2}>Sign in to "CAD sys for APCS"</Typo.H>
                    </div>
                    <StoreProvider>
                        <LoginForm className={classNames('self-center')}></LoginForm>
                    </StoreProvider>
                    <div
                        className={classNames(cls.login, 'rounded-lg self-center container max-w-80 border-neutral-400 border p-4 flex flex-col gap-3')}>
                        <Typo.H className={classNames('self-center')} size={HeaderSize.h4}>New to "CAD sys for
                            APCS"?</Typo.H>
                        <Typo.H className={classNames('self-center text-blue-700')} underline={true}
                                size={HeaderSize.h4}><Link href={"/signup"}>Create an account</Link></Typo.H>

                    </div>
                    <div>
                        <nav>

                        </nav>
                    </div>
                </div>
                <div className={classNames('h-screen sm:h-full flex flex-col justify-center')}>
                    <Link className={classNames('sm:fixed sm:top-2 sm:left-2 justify-center flex gap-2')} href={"/"}>
                        <Image width={36} alt={'Return'} src={Return}></Image>
                        <Typo.H size={HeaderSize.h3} bold={true} className={classNames('self-center')}>Go Back</Typo.H>
                    </Link>
                    <Disclaimer>

                    </Disclaimer>

                </div>
            </main>
        </>

    )
}
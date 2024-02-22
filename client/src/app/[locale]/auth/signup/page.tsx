import classNames from "classnames";
import {Link} from "@/navigation";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import StoreProvider from "@/shared/store/StoreProvider";
import React from "react";
import MultiStepForm from "@/shared/ui/MultiStepForm/MultiStepForm";
import { SignUpForm } from "@/features/SignUp";

export default function SignupPage() {
    return (
        <main>
            <div className={classNames('min-h-screen flex justify-center')}>

                <div className={classNames('container mx-auto hidden justify-center sm:flex flex-col gap-5 py-8 flex-1')}>
                    <div className={classNames('self-center')}>
                        <Link href={"/"}>
                            <Image alt={'Logo'} src={Logo} width={100}/>
                        </Link>
                    </div>
                    {/*<div className={classNames('self-center')}>*/}
                    {/*    <Typo.H size={HeaderSize.h2}>Sign in to "CAD sys for APCS"</Typo.H>*/}
                    {/*</div>*/}

                    <StoreProvider>
                        <MultiStepForm pagination={true} className={classNames('self-center rounded-lg container max-w-80 bg-neutral-200 border-neutral-400 border p-4 flex flex-col gap-5')} steps={{
                            0: {pos: 0, component: <SignUpForm.Email className={classNames('self-center')} />, header: 'Mail'},
                            1: {pos: 1, component: <SignUpForm.PersonalData className={classNames('self-center')} />, header: 'Personal data'},
                            2: {pos: 2, component: <SignUpForm.Password className={classNames('self-center')} />, header: 'Password'},
                        }} />
                    </StoreProvider>
                    {/*<div*/}
                    {/*    className={classNames(cls.login, 'rounded-lg self-center container max-w-80 border-neutral-400 border p-4 flex flex-col gap-3')}>*/}
                    {/*    <Typo.H className={classNames('self-center')} size={HeaderSize.h4}>New to "CAD sys for*/}
                    {/*        APCS"?</Typo.H>*/}
                    {/*    <Typo.H className={classNames('self-center text-blue-700')} underline={true}*/}
                    {/*            size={HeaderSize.h4}><Link href={"/signup"}>Create an account</Link></Typo.H>*/}
                    {/*</div>*/}
                </div>
                <div className={classNames('hidden md:flex flex-1 justify-center overflow-hidden bg-neutral-200')}>
                    <Image alt={'placeholder'} src='https://placehold.co/600x600' width={600}
                           height={600} unoptimized></Image>
                </div>
            </div>
        </main>
    )
}
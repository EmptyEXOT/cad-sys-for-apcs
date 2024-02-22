import React from "react";
import classNames from "classnames";
import {Link} from "@/navigation";
import Image from "next/image";
import Return from "@/public/Return.png";
import Typo from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";
import {Disclaimer} from "@/widgets/Navbar/ui/Menu/Disclaimer";

export default function PasswordResetLayout({
                                                children,
                                            }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <div className={classNames('h-screen sm:h-full flex flex-col justify-center')}>
                <Link className={classNames('sm:fixed sm:top-2 sm:left-2 justify-center flex gap-2')} href={"/"}>
                    <Image width={36} alt={'Return'} src={Return}></Image>
                    <Typo.H size={HeaderSize.h3} bold={true} className={classNames('self-center')}>Go Back</Typo.H>
                </Link>
                <Disclaimer>
                </Disclaimer>
            </div>
        </>)
}
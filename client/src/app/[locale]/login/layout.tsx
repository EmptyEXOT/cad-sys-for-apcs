import React, {ReactNode} from "react";

export default function LoginLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        {children}
    </>)
}
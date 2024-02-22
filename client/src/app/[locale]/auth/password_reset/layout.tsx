import React, {ReactNode} from "react";

export default function PasswordResetLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        {children}
    </>)
}
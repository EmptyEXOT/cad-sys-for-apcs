import React, {ReactNode} from "react";

export default function SignupLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        {children}
    </>)
}
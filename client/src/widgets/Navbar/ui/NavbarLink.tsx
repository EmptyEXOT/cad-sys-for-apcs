import React, {FC, ReactNode} from 'react';
import classNames from "classnames";

interface NavbarLinkProps {
    children: ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({children, ...props}) => {
    return (
        <div className={classNames('flex flex-col justify-center py-3')}>
            {children}
        </div>
    );
};

export default NavbarLink;
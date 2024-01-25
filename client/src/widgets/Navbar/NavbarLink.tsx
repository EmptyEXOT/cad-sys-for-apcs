import React, {FC} from 'react';
import {Sections} from "@/shared/sections/sections";
import Button from "@/shared/Button/Button";
import classNames from "classnames";
import {Link} from "react-scroll";

interface NavbarLinkProps {
    offset: number;
    to: Sections;
    children: string;
}

const NavbarLink: FC<NavbarLinkProps> = (props) => {
    return (
        <Link activeClass="active"
              to={props.to}
              spy={true}
              smooth={true}
              offset={props.offset}
              duration={500}
        className={classNames('flex flex-col justify-center')}>
            <Button className={classNames('z-50')}><b>{props.children}</b></Button>
        </Link>
    );
};

export default NavbarLink;
import React from 'react';
import LogoIcon from '../svg/LogoIcon';
import { Link } from "gatsby"

const Navbar = () => (
    <nav className="fixed w-24 h-auto m-auto inset-x-0 bg-red-600 p-5 z-50">
        <LogoIcon />
    </nav>   
);

export default Navbar;
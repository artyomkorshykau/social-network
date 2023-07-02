import headerLogo from "../../img/logo.png";
import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (<header className={s.header}>
        <div className={s.logo}>
            <img
                src={headerLogo}
                alt="logo"/></div>
    </header>)
}

export default Header
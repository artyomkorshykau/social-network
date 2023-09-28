import headerLogo from "../../img/logo.png";
import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (<header className={s.header}>
        <div className={s.logo}>
            <img
                src={headerLogo}
                alt="logo"/></div>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>)
}

export default Header
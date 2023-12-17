import headerLogo from "../../img/logo.png";
import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Props} from "./HeaderContainer";


const Header = (props: Props) => {

    return (<header className={s.header}>
        <div className={s.logo}>
            <img
                src={headerLogo}
                alt="logo"/></div>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logoutTC}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>)
}

export default Header
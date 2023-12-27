import headerLogo from "../../img/logo.png";
import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useHeaderData} from "../../utils/hooks/useHeaderData";


const Header = () => {

    const {dispatch, logout, isAuth, login} = useHeaderData()


    return (<header className={s.header}>
        <div className={s.logo}>
            <img
                src={headerLogo}
                alt="logo"/></div>

        <div className={s.loginBlock}>
            {isAuth
                ? <div>{login} - <button onClick={() => dispatch(logout)}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>)
}

export default Header
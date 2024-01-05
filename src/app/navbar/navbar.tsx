import React from "react";
import {NavLink} from "react-router-dom";
import {Layout, Menu, theme} from "antd";


const Navbar = () => {

    const {token: {colorBgContainer}} = theme.useToken();
    const {Sider} = Layout;

    return <Sider style={{background: colorBgContainer}} width={200}>
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%'}}
        >
            <Menu.Item><NavLink to='/profile'>Профиль</NavLink></Menu.Item>
            <Menu.Item><NavLink to='/dialogs'>Сообщения</NavLink></Menu.Item>
            <Menu.Item><NavLink to='/users'>Пользователи</NavLink></Menu.Item>
            <Menu.Item><NavLink to='/news'>Новости</NavLink></Menu.Item>
            <Menu.Item><NavLink to='/music'>Музыка</NavLink></Menu.Item>
            <Menu.Item><NavLink to='/settings'>Настройки</NavLink></Menu.Item>
        </Menu>
    </Sider>
}

export default Navbar
import React from "react";
import {NavLink} from "react-router-dom";
import {useHeaderData} from "../../utils/hooks/useHeaderData";
import {Header} from "antd/lib/layout/layout";
import {UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Menu} from "antd";


export const AppHeader = () => {

    const {dispatch, logout, isAuth, login} = useHeaderData()

    return <Header style={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'}}>
        <div>
            {isAuth
                ?
                <div style={{color: 'white'}}>{login}
                    <Avatar style={{backgroundColor: '#87d068', margin: "0 20px"}} icon={<UserOutlined/>}/>
                    <Button danger ghost={true} onClick={() => dispatch(logout)}>Выйти</Button>
                </div>
                : <Button type={"primary"} ghost={true}><NavLink to={'/login'}>Войти</NavLink></Button>}
        </div>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{flex: 1, minWidth: 0}}
        ></Menu>
    </Header>
}


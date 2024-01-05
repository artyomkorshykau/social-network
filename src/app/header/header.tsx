import React from "react";
import {NavLink} from "react-router-dom";
import {useHeaderData} from "../../utils/hooks/useHeaderData";
import {UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Layout, message, Popconfirm} from "antd";
import s from './header.module.css'

export const Header = () => {

    const {dispatch, logout, isAuth, login} = useHeaderData()
    const {Header} = Layout;

    const confirmHandler = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        message.success('Click on Yes')
        dispatch(logout)
    };

    const cancelHandler = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        message.error('Click on No');
    };

    return <Header
        style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>

        <div className={s.logo}>
            {/*<img src={logo} alt={'logo'}/>*/}
        </div>

        <div>
            {isAuth
                ?
                <div style={{color: 'white'}}>{login}
                    <Avatar style={{backgroundColor: '#87d068', margin: "0 20px"}} icon={<UserOutlined/>}/>
                    <Popconfirm
                        title="Попутал?"
                        onConfirm={confirmHandler}
                        onCancel={cancelHandler}
                        okText="Да"
                        cancelText="Не уверен"
                    >
                        <Button danger ghost={true}>Выйти</Button>
                    </Popconfirm>

                </div>
                : <Button type={"primary"} ghost={true}><NavLink to={'/login'}>Войти</NavLink></Button>}


        </div>
    </Header>
}


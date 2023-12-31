import React, {useEffect} from 'react';
import {Layout, Menu, theme} from 'antd';
import {NavLink, Route, Switch} from "react-router-dom";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";
import {Login} from "../components/Login/Login";
import {useAppSuspendedData} from "../utils/hooks/useAppData";
import {thunks} from "../redux/thunks/thunks";
import {Preloader} from "../common/Preloader/Preloader";
import {AppHeader} from "../components/Header/AppHeader";
import {useDispatch} from "react-redux";

const {Content, Footer, Sider} = Layout;

const AppLayout = () => {

    const {ChatPage, UsersPage, ProfilePage, DialogsPage, isInitialized} = useAppSuspendedData()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunks.initialized());
        window.addEventListener('unhandledrejection', catchAllHandleErrors);

        return () => {
            window.removeEventListener('unhandledrejection', catchAllHandleErrors);
        };
    }, [dispatch]);

    const {token: {colorBgContainer, borderRadiusLG},} = theme.useToken();
    const catchAllHandleErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred, check console');

        console.error(e);

    };

    if (!isInitialized) {
        return <Preloader/>;

    }

    return (
        <Layout>
            <AppHeader/>
            <Content style={{padding: '20px 48px'}}>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        maxWidth: 1920,
                        margin: "auto"
                    }}
                >
                    <Sider style={{background: colorBgContainer}} width={200}>
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
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <Switch>
                            <Route path='/dialogs' render={() => <DialogsPage/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfilePage/>}/>
                            <Route path='/users' render={() => <UsersPage/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/chat' render={() => <ChatPage/>}/>
                            <Route path='*' render={() => <div>404 PAGE NOT FOUND</div>}/>
                        </Switch>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Social Network ©2023 Created by Artyom Korshykau</Footer>
        </Layout>
    );
};

export default AppLayout;
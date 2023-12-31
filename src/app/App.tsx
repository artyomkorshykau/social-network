import React, {useEffect} from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {NavLink, Route, Switch} from "react-router-dom";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";
import {Login} from "../components/Login/Login";
import {useHeaderData} from "../utils/hooks/useHeaderData";
import {useAppSuspendedData} from "../utils/hooks/useAppData";
import {thunks} from "../redux/thunks/thunks";
import {Preloader} from "../common/Preloader/Preloader";

const {Header, Content, Footer, Sider} = Layout;

const AppLayout: React.FC = () => {

    const {ChatPage, UsersPage, ProfilePage, DialogsPage, isInitialized} = useAppSuspendedData()
    const {dispatch, logout, isAuth, login} = useHeaderData()

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
            <Header style={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'}}>
                <div>
                    {isAuth
                        ?
                        <div style={{color: 'white'}}>{login} - <button onClick={() => dispatch(logout)}>Выйти</button>
                        </div>
                        : <NavLink to={'/login'}>Войти</NavLink>}
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{flex: 1, minWidth: 0}}
                />
            </Header>
            <Content style={{padding: '0 48px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG}}
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
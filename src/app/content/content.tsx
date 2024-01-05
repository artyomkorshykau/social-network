import React from "react";
import {Layout, theme} from "antd";
import {Route, Switch} from "react-router-dom";
import News from "../../pages/news/news";
import Music from "../../pages/music/music";
import Settings from "../../pages/settings/settings";
import {Login} from "../../pages/login/login";
import {useAppSuspendedData} from "../../utils/hooks/useAppData";
import Navbar from "../navbar/navbar";

export const AppContent = () => {
    const {ChatPage, UsersPage, ProfilePage} = useAppSuspendedData()
    const {token: {colorBgContainer, borderRadiusLG},} = theme.useToken();
    const {Content} = Layout;

    return <Content style={{padding: '20px 48px'}}>
        <Layout
            style={{
                padding: '24px 0',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                maxWidth: 1920,
                margin: "auto"
            }}
        >
            <Navbar/>
            <Content style={{padding: '0 24px', minHeight: 280}}>
                <Switch>
                    <Route path='/dialogs' render={() => <ChatPage/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfilePage/>}/>
                    <Route path='/users' render={() => <UsersPage/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/chat' render={() => <ChatPage/>}/>
                    <Route path='*' render={() => <ProfilePage/>}/>
                </Switch>
            </Content>
        </Layout>
    </Content>
}
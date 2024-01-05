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
    const {SuspendedProfile, SuspendedUsers, SuspendedChat} = useAppSuspendedData()
    const {token: {colorBgContainer, borderRadiusLG},} = theme.useToken();
    const {Content} = Layout;

    return <Content style={{padding: '20px 48px'}}>
        <Layout
            style={{
                padding: '24px 0',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                maxWidth: 1920,
                margin: "auto",
                height: '100vh'
            }}
        >
            <Navbar/>
            <Content style={{padding: '0 24px', minHeight: 280}}>
                <Switch>
                    <Route path='/dialogs' render={() => <SuspendedChat/>}/>
                    <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                    <Route path='/users' render={() => <SuspendedUsers/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/chat' render={() => <SuspendedChat/>}/>
                    <Route path='*' render={() => <SuspendedProfile/>}/>
                </Switch>
            </Content>
        </Layout>
    </Content>
}
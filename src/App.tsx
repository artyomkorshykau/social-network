import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export type DialogsDataPropsType = {
    id: string
    name: string
}
export type MessageDataPropsType = {
    id: string
    title: string
}
export type PostsDataPropsType = {
    id: string
    message: string
    likeCounts: string
}

type StatePropsType = {
    profilePage: ProfilePropsType
    messagePage: MessagePropsType
}

type MessagePropsType = {
    messageData: MessageDataPropsType[]
}
type ProfilePropsType = {
    dialogsData: DialogsDataPropsType[],
    postsData: PostsDataPropsType[]
}

type AppPropsType = {
    state: StatePropsType
    addPost: (value: string) => void
}

function App(props: AppPropsType) {

    let dialogs = () => <Dialogs
        dialogsData={props.state.profilePage.dialogsData}
        messageData={props.state.messagePage.messageData}/>

    let profile = () => <Profile postsData={props.state.profilePage.postsData} addPost={props.addPost}/>

    let news = () => <News/>
    let music = () => <Music/>
    let settings = () => <Settings/>

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' Component={dialogs}/>
                    <Route path='/profile' Component={profile}/>
                    <Route path='/news' Component={news}/>
                    <Route path='/music' Component={music}/>
                    <Route path='/settings' Component={settings}/>
                </Routes>
            </div>
        </div>
    );
}

export default App
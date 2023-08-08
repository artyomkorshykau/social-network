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
import {DialogsDataPropsType, MessageDataPropsType, PostsDataPropsType} from "./index";

type AppPropsType = {
    dialogsData: DialogsDataPropsType[]
    messageData: MessageDataPropsType[]
    postsData: PostsDataPropsType[]
}

function App(props: AppPropsType) {

    let dialogs = () => <Dialogs
        dialogsData={props.dialogsData}
        messageData={props.messageData}/>

    let profile = () => <Profile
        postsData={props.postsData}/>

    let news = () => <News/>
    let music = () => <Music/>
    let settings = () => <Settings/>

    return (<Router>
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
        </Router>
    );
}

export default App
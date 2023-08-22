import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import {ActionType, StateType, StoreType,} from "./redux/store";


type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
    state: StateType
}

function App(props: AppPropsType) {
    let dialogs = () => <Dialogs store={props.store}/>
    let profile = () => <Profile profilePage={props.state.profilePage}
                                 dispatch={props.dispatch}/>
    let news = () => <News/>
    let music = () => <Music/>
    let settings = () => <Settings/>

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={dialogs}/>
                <Route path='/profile' render={profile}/>
                <Route path='/news' render={news}/>
                <Route path='/music' render={music}/>
                <Route path='/settings' render={settings}/>
            </div>
        </div>
    );
}

export default App
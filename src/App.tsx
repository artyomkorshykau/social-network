import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import {Preloader} from "./common/Preloader/Preloader";


class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializedTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({initialized: state.app.initialized})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedTC})
)(App)

type AppType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    initializedTC: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}
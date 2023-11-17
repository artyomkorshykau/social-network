import HeaderContainer from "../components/Header/HeaderContainer";
import Navbar from "../components/Navbar/Navbar";
import {Preloader} from "../common/Preloader/Preloader";
import {AppStateType} from "../redux/store";
import UsersContainer from "../components/Users/UsersContainer";
import {Route, withRouter} from "react-router-dom";
import Login from "../components/Login/Login";
import {compose} from "redux";
import ProfileContainer from "../components/Profile/ProfileContainer";
import Music from "../components/Music/Music";
import News from "../components/News/News";
import {initializedTC} from "../redux/thunks/thunks";
import Settings from "../components/Settings/Settings";
import React from "react";
import {connect} from "react-redux";
import DialogsContainer from "../components/Dialogs/DialogsContainer";

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

//---------------------------------TYPES---------------------------------

type AppType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    initializedTC: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}
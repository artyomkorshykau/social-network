import HeaderContainer from "../components/Header/HeaderContainer";
import Navbar from "../components/Navbar/Navbar";
import {Preloader} from "../common/Preloader/Preloader";
import {AppStateType} from "../redux/store";
import {Route, withRouter} from "react-router-dom";
import Login from "../components/Login/Login";
import {compose} from "redux";
import Music from "../components/Music/Music";
import News from "../components/News/News";
import {initializedTC} from "../redux/thunks/thunks";
import Settings from "../components/Settings/Settings";
import React from "react";
import {connect} from "react-redux";
import './App.css';
import {withSuspense} from "../HOC/withSuspense";

const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('../components/Users/UsersContainer'))

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
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
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
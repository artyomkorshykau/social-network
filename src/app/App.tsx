import HeaderContainer from "../components/Header/HeaderContainer";
import Navbar from "../components/Navbar/Navbar";
import {Preloader} from "../common/Preloader/Preloader";
import {AppState} from "../redux/store";
import {Route, Switch, withRouter} from "react-router-dom";
import Login from "../components/Login/Login";
import {compose} from "redux";
import Music from "../components/Music/Music";
import News from "../components/News/News";
import {initializedTC} from "../redux/thunks/thunks";
import Settings from "../components/Settings/Settings";
import React from "react";
import {connect} from "react-redux";
import './App.css';
import {withSuspense} from "../hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('../components/Users/UsersContainer'))

const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedUsers = withSuspense(UsersContainer)

class App extends React.Component<Props> {

    catchAllHandleErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred, check console')
        console.error(e)
    }

    componentDidMount() {
        this.props.initializedTC()
        window.addEventListener('unhandledrejection', this.catchAllHandleErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllHandleErrors)
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                        <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                        <Route path='/users' render={() => <SuspendedUsers/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 PAGE OT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: AppState): MapStateToProps => ({isInitialized: state.app.initialized})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedTC})
)(App)

//---------------------------------TYPES---------------------------------

type Props = MapStateToProps & MapDispatchToProps

type MapDispatchToProps = {
    initializedTC: () => void
}

type MapStateToProps = {
    isInitialized: boolean
}
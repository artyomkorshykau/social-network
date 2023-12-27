import Navbar from "../components/Navbar/Navbar";
import {Preloader} from "../common/Preloader/Preloader";
import {AppState} from "../redux/store";
import {Route, Switch, withRouter} from "react-router-dom";
import {Login} from "../components/Login/Login";
import {compose} from "redux";
import Music from "../components/Music/Music";
import News from "../components/News/News";
import Settings from "../components/Settings/Settings";
import React from "react";
import {connect} from "react-redux";
import './App.css';
import {withSuspense} from "../hoc/withSuspense";
import {thunks} from "../redux/thunks/thunks";
import Header from "../components/Header/Header";

const Dialogs = React.lazy(() => import('../components/Dialogs/Dialogs'))
const Profile = React.lazy(() => import('../components/Profile/Profile'))
const Users = React.lazy(() => import('../components/Users/Users'))

const SuspendedProfile = withSuspense(Profile)
const SuspendedDialogs = withSuspense(Dialogs)
const SuspendedUsers = withSuspense(Users)

class App extends React.Component<Props> {

    catchAllHandleErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occurred, check console')
        console.error(e)
    }

    componentDidMount() {
        this.props.initialized()
        window.addEventListener('unhandledrejection', this.catchAllHandleErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllHandleErrors)
    }

    render() {
        if (this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <Header/>
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
    connect(mapStateToProps, {initialized: thunks.initialized})
)(App)

//---------------------------------TYPES---------------------------------

type Props = MapStateToProps & MapDispatchToProps

type MapDispatchToProps = {
    initialized: () => void
}

type MapStateToProps = {
    isInitialized: boolean
}
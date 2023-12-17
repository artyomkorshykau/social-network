import Header from "./Header";
import {connect} from "react-redux";
import {AppState} from "../../redux/store";
import React from "react";
import {compose} from "redux";
import {LogoutTC} from "../../redux/thunks/thunks";

class HeaderContainer extends React.Component<Props> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppState): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToProps, MapDispatchToProps, {}, AppState>(mapStateToProps, {logoutTC: LogoutTC})
)(HeaderContainer)


//--------------------------------TYPES--------------------------------
type MapStateToProps = {
    isAuth: boolean | null
    login: string | null
}

type MapDispatchToProps = {
    logoutTC: () => void
}

export type Props = MapStateToProps & MapDispatchToProps

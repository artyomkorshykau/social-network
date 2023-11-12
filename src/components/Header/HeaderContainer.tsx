import Header from "./Header";
import {connect} from "react-redux";
import {authMeTC, LogoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";
import React from "react";
import {compose} from "redux";

class HeaderContainer extends React.Component<HeaderContainerType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {LogoutTC})
)(HeaderContainer)


//--------------------------------TYPES--------------------------------
type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
export type AuthMeType = {
    data: DataAuthMe,
    "messages": [],
    "fieldsErrors": [],
    "resultCode": number
}
export type DataAuthMe = {
    id: number,
    login: string,
    email: string
}
export type HeaderContainerType = MapStateToPropsType & MapDispatchToProps

type MapDispatchToProps = {
    LogoutTC: () => void
}
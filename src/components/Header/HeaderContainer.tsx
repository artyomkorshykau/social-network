import Header from "./Header";
import {connect} from "react-redux";
import {authMeTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.authMeTC()
    }

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

export default connect(mapStateToProps, {authMeTC})(HeaderContainer)


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
    id: number | null,
    login: string | null,
    email: string | null
}
export type HeaderContainerType = MapStateToPropsType & MapDispatchToProps

type MapDispatchToProps = {
    authMeTC: () => void
}
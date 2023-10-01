import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

//types
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
    setAuthUserData: (id: number | null, login: string | null, email: string | null) => void
}
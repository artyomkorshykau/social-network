import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialState, setUserAC, unfollowAC, userType} from "../../redux/UsersReducer";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unfollow: (id: string) => {
            dispatch(unfollowAC(id))
        },
        setUser: (user: userType[]) => {
            dispatch(setUserAC(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
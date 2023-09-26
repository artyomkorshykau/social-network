import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUserAC, unfollowAC} from "../../redux/UsersReducer";
import {UsersInfoType} from "../../api/social-network-api";
import {Dispatch} from "redux";
import Users from "./Users";


type MapStateToProps = {
    users: UsersInfoType[];
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}
export type UsersClassType = MapStateToProps & MapDispatchToProps
type MapDispatchToProps = {
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUser: (user: UsersInfoType[]) => void;
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUser: (user: UsersInfoType[]) => {
            dispatch(setUserAC(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
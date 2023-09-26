import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setPageAC, setTotalUserCountAC, setUserAC, unfollowAC} from "../../redux/UsersReducer";
import {UsersInfoType} from "../../api/social-network-api";
import {Dispatch} from "redux";
import Users from "./Users";


type MapStateToProps = {
    users: UsersInfoType[];
    pageSize: number
    totalUserCount: number
    currentPage: number
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}
export type UsersClassType = MapStateToProps & MapDispatchToProps
type MapDispatchToProps = {
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUser: (user: UsersInfoType[]) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
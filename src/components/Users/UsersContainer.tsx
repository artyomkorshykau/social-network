import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, setPage, setTotalUserCount, setUser, toggleIsFetching, unfollow} from "../../redux/UsersReducer";
import {UserType} from "../../api/social-network-api";
import UserFC from "./UserFC";
import {Preloader} from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setUser(data.items)
                    this.props.toggleIsFetching(false)
                    this.props.setTotalUserCount(data.totalCount)
                })

        }
    }

    onPageChanged = (pageNumber: number) => {

        this.props.setPage(pageNumber)

        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUser(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UserFC onPageChanged={this.onPageChanged}
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}/>
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUser,
        setPage,
        setTotalUserCount,
        toggleIsFetching
    }
)(UsersAPIComponent)

//type
type MapStateToProps = {
    users: UserType[];
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapDispatchToProps = {
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUser: (user: UserType[]) => void;
    setPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (fetching: boolean) => void
}

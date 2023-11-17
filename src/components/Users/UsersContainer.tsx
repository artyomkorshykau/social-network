import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow, followTC,
    getUsersTC,
    pageChangedTC,
    setPage,
    setTotalUserCount,
    setUser,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow, unFollowTC
} from "../../redux/users-reducer";
import User from "./User";
import {Preloader} from "../../common/Preloader/Preloader"
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../utils/selectors/selectors";
import {UserType} from "../../api/api";


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize, this.props.users)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.pageChangedTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <User onPageChanged={this.onPageChanged}
                  totalUserCount={this.props.totalUserCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  isFetching={this.props.isFetching}
                  toggleIsFollowing={this.props.toggleIsFollowing}
                  isFollowing={this.props.isFollowing}
                  followTC={this.props.followTC}
                  unFollowTC={this.props.unFollowTC}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUser,
        setPage,
        setTotalUserCount,
        toggleIsFetching,
        toggleIsFollowing,
        getUsersTC,
        pageChangedTC,
        followTC,
        unFollowTC
    }),
    withAuthRedirect
)(UsersContainer)

//--------------------------------TYPES--------------------------------
type MapStateToProps = {
    users: UserType[];
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: []
}
export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapDispatchToProps = {
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUser: (user: UserType[]) => void;
    setPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (fetching: boolean) => void
    toggleIsFollowing: (fetching: boolean, id: number) => void
    getUsersTC: (currentPage: number, pageSize: number, users: UserType[]) => void
    pageChangedTC: (pageNumber: number, pageSize: number) => void
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}

import React from 'react'
import {connect} from "react-redux";
import {AppState} from "../../redux/store";
import Users from "./Users";
import {Preloader} from "../../common/Preloader/Preloader"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../utils/selectors/userSelectors";
import {
    follow,
    setPage,
    setTotalUserCount,
    setUser,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow
} from "../../redux/actions/actions";
import {followTC, getUsersTC, pageChangedTC, unFollowTC} from "../../redux/thunks/thunks";
import {UserType} from "../../api/types/typesApi";


class UsersContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize, this.props.users)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.pageChangedTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
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

const mapStateToProps = (state: AppState): MapStateToProps => {
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
    connect<MapStateToProps, MapDispatchToProps, unknown, AppState>(mapStateToProps, {
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
export type Props = MapStateToProps & MapDispatchToProps

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

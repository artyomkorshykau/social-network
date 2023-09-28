import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, setPage, setTotalUserCount, setUser, toggleIsFetching, unfollow} from "../../redux/UsersReducer";
import {UserType} from "../../api/social-network-api";
import axios from "axios";
import UserFC from "./UserFC";
import {Preloader} from "../../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

        const settings = {
            withCredentials: true,
            headers: {
                'API-KEY': 'd97e2ed5-672f-4df7-ab8f-20c419d5b616'
            }
        }

        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, settings)
                .then(res => {
                    this.props.toggleIsFetching(false)
                    this.props.setUser(res.data.items)
                    this.props.setTotalUserCount(res.data.totalCount)
                })
        }
    }

    onPageChanged(pageNumber: number) {

        const settings = {
            withCredentials: true,
            headers: {
                'API-KEY': 'd97e2ed5-672f-4df7-ab8f-20c419d5b616'
            }
        }

        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, settings)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUser(res.data.items)
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

type MapStateToProps = {
    users: UserType[];
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
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
export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapDispatchToProps = {
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUser: (user: UserType[]) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (fetching: boolean) => void
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (id: number) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id: number) => {
//             dispatch(unfollowAC(id))
//         },
//         setUser: (user: UsersInfoType[]) => {
//             dispatch(setUserAC(user))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setPageAC(pageNumber))
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         toggleIsFetching: (fetching: boolean) => {
//             dispatch(toggleIsFetchingAC(fetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUser,
        setPage,
        setTotalUserCount,
        toggleIsFetching
    }
)(UsersAPIComponent)


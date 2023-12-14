import React from 'react';
import {User} from "./User";
import {Pagination} from "../../common/Pagination/Pagination";
import {UserType} from "../../api/types/typesApi";

type Props = {
    onPageChanged: (page: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFetching: boolean
    toggleIsFollowing: (fetching: boolean, id: number) => void
    isFollowing: []
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}


const Users = (props: Props) => {

    return (
        <div>
            <Pagination totalUserCount={props.totalUserCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
            {
                props.users.map((el) => <User followTC={props.followTC}
                                              isFollowing={props.isFollowing}
                                              unFollowTC={props.unFollowTC}
                                              user={el}
                                              key={el.id}/>)
            }
        </div>
    );
};

export default Users;
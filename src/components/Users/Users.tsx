import React from 'react';
import {UserType} from "../../api/social-network-api";
import {Pagination} from "./Pagination";
import {User} from "./User";


const Users = (props: UserPropsType) => {

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

//--------------------------------TYPES--------------------------------
type UserPropsType = {
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

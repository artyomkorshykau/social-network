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
    isFollowing: []
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}


const Users = ({
                   users,
                   unFollowTC,
                   followTC,
                   isFollowing,
                   totalUserCount,
                   pageSize,
                   onPageChanged,
                   currentPage,
               }: Props) => {

    return (
        <div>
            <Pagination totalUserCount={totalUserCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}/>
            {
                users.map((el) => <User followTC={followTC}
                                        isFollowing={isFollowing}
                                        unFollowTC={unFollowTC}
                                        user={el}
                                        key={el.id}/>)
            }
        </div>
    );
};

export default Users;
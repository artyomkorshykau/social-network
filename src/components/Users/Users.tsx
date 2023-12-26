import React, {useEffect} from 'react';
import {User} from "./User";
import {Pagination} from "../../common/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getIsFollowing,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../utils/selectors/userSelectors";
import {followTC, getUsersTC, pageChangedTC, unFollowTC} from "../../redux/thunks/thunks";

export const Users = () => {

    const totalUserCount = useSelector(getTotalUserCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const isFollowing = useSelector(getIsFollowing)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize, users))
    }, [])
    const onPageChanged = (pageNumber: number) => {
        dispatch(pageChangedTC(pageNumber, pageSize))
    }
    const follow = (id: number) => {
        dispatch(followTC(id))
    }
    const unfollow = (id: number) => {
        dispatch(unFollowTC(id))
    }

    return (
        <div>
            <Pagination totalUserCount={totalUserCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}/>
            {
                users.map((el) => <User followTC={follow}
                                        isFollowing={isFollowing}
                                        unFollowTC={unfollow}
                                        user={el}
                                        key={el.id}/>)
            }
        </div>
    );
};

export default Users;
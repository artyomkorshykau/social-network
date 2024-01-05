import React, {useEffect} from 'react';
import {Pagination} from "../../common/pagination/pagination";
import {useDispatch} from "react-redux";
import {thunks} from "../../redux/thunks/thunks";
import {Preloader} from "../../common/preloader/preloader";
import {useUserData} from "../../utils/hooks/useUserData";
import {User} from "../../components/user/user";
import {Filter} from "../../redux/reducers/users-reducer";
import {UserSearchForm} from "../../components/user-search-form/user-search-form";

const Users = () => {

    const {filter, users, totalUserCount, pageSize, currentPage, isFollowing, isFetching} = useUserData()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunks.getUsers(currentPage, pageSize, filter))
    }, [])
    const onPageChanged = (pageNumber: number) => {
        dispatch(thunks.getUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: Filter) => {
        dispatch(thunks.getUsers(1, pageSize, filter))
    }
    const follow = (id: number) => {
        dispatch(thunks.follow(id))
    }
    const unfollow = (id: number) => {
        dispatch(thunks.unFollow(id))
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <UserSearchForm onFilterChanged={onFilterChanged}/>
            <Pagination totalUserCount={totalUserCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}/>
            {isFetching ? <Preloader/> : null}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: ' 10px',
                height: '200px',
            }}>
                {
                    users.map((el) =>
                        <User followTC={follow}
                              isFollowing={isFollowing}
                              unFollowTC={unfollow}
                              user={el}
                              key={el.id}/>)
                }
            </div>

        </div>
    );
};

export default Users;
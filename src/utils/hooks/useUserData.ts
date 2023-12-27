import {useSelector} from "react-redux";
import {
    getCurrentPage, getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUserCount,
    getUserFilter,
    getUsers
} from "../selectors/userSelectors";

export const useUserData = () => {
    const totalUserCount = useSelector(getTotalUserCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsers)
    const isFollowing = useSelector(getIsFollowing)
    const filter = useSelector(getUserFilter)
    const isFetching = useSelector(getIsFetching)

    return {
        totalUserCount,
        currentPage,
        pageSize,
        users,
        isFollowing,
        filter,
        isFetching
    }
}
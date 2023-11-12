import {AppStateType} from "../../redux/store";


// ------------------------USER SELECTORS--------------------------------
export const getUsers = (state: AppStateType) => state.usersPage.users
export const getPageSize = (state: AppStateType) => state.usersPage.pageSize
export const getTotalUserCount = (state: AppStateType) => state.usersPage.totalUserCount
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getIsFollowing = (state: AppStateType) => state.usersPage.isFollowing




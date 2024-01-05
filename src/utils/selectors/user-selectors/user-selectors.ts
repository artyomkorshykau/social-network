import {AppState} from "../../../redux/store/store";

export const getUsers = (state: AppState) => state.usersPage.users
export const getPageSize = (state: AppState) => state.usersPage.pageSize
export const getTotalUserCount = (state: AppState) => state.usersPage.totalUserCount
export const getCurrentPage = (state: AppState) => state.usersPage.currentPage
export const getIsFetching = (state: AppState) => state.usersPage.isFetching
export const getIsFollowing = (state: AppState) => state.usersPage.isFollowing
export const getUserFilter = (state: AppState) => state.usersPage.filter





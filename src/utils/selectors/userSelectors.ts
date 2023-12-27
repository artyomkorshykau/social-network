import {AppState} from "../../redux/store";

export const getUsers = (state: AppState) => state.usersPage.users
export const getPageSize = (state: AppState) => state.usersPage.pageSize
export const getTotalUserCount = (state: AppState) => state.usersPage.totalUserCount
export const getCurrentPage = (state: AppState) => state.usersPage.currentPage
export const getIsFetching = (state: AppState) => state.usersPage.isFetching
export const getIsFollowing = (state: AppState) => state.usersPage.isFollowing
export const getCaptchaUrl = (state: AppState) => state.auth.captcha
export const getIsAuth = (state: AppState) => state.auth.isAuth
export const getUserFilter = (state: AppState) => state.usersPage.filter
export const getDialogsPage = (state: AppState) => state.dialogsPage
export const getUserLogin = (state: AppState) => state.auth.login




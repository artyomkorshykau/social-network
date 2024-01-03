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
export const getPosts = (state: AppState) => state.profilePage.posts
export const getProfile = (state: AppState) => state.profilePage.profile
export const getStatus = (state: AppState) => state.profilePage.status
export const getLoggedUser = (state: AppState) => state.auth.id
export const getIsInitialized = (state: AppState) => state.app.initialized
export const getChatMessages = (state: AppState) => state.chat.messages
export const getSocketStatus = (state: AppState) => state.chat.status
export const getUserPhoto = (state: AppState) => state.profilePage.profile?.photos



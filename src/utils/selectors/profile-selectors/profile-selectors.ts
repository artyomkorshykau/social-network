import {AppState} from "../../../redux/store/store";

export const getPosts = (state: AppState) => state.profilePage.posts
export const getProfile = (state: AppState) => state.profilePage.profile
export const getStatus = (state: AppState) => state.profilePage.status
export const getUserPhoto = (state: AppState) => state.profilePage.profile?.photos




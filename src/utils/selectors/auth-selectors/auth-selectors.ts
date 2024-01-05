import {AppState} from "../../../redux/store/store";

export const getCaptchaUrl = (state: AppState) => state.auth.captcha
export const getIsAuth = (state: AppState) => state.auth.isAuth
export const getUserLogin = (state: AppState) => state.auth.login
export const getLoggedUser = (state: AppState) => state.auth.id




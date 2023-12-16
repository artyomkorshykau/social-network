import {
    follow,
    initializedSucceed,
    setAuthUserData,
    setCaptcha,
    setPage,
    setPhotoSuccess,
    setStatusAC,
    setTotalUserCount,
    setUser,
    setUserProfile,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow
} from "../actions/actions";
import {stopSubmit} from "redux-form";
import {AppThunk} from "../store";
import {ResultCode} from "../../common/enums/Response";
import {authAPI} from "../../api/authApi";
import {securityAPI} from "../../api/securityApi";
import {profileAPI} from "../../api/profileApi";
import {UserProfile, UserType} from "../../api/types/typesApi";
import {usersAPI} from "../../api/userApi";

//-------------------------------APP-THUNK-------------------------------
export const initializedTC = (): AppThunk => {
    return async (dispatch) => {
        const res = dispatch(authMeTC())
        Promise.all([res])
            .then(() => {
                dispatch(initializedSucceed())
            })
    };
};

//-------------------------------AUTH-THUNK-------------------------------
export const authMeTC = (): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.me();
            if (res.resultCode === ResultCode.SUCCEED) {
                let {id, login, email} = res.data
                dispatch(setAuthUserData(id, login, email, true));
            }
        } catch (error) {
            // Handle error
        }
    };
};

export const LoginTC = (log: string, pass: string, remember: boolean, captcha: string | null): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.login(log, pass, captcha, remember);
            if (res.resultCode === ResultCode.SUCCEED) {
                await dispatch(authMeTC());
            } else {
                if (res.resultCode === ResultCode.CAPTCHA) {
                    await dispatch(getCaptchaTC())
                }
                let message = res.messages.length > 0 ? res.messages[0] : 'Some Error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        } catch (error) {
            // Handle error
        }
    };
};

export const LogoutTC = (): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.logout();
            if (res.resultCode === ResultCode.SUCCEED) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        } catch (error) {
            // Handle error
        }
    };
};

export const getCaptchaTC = (): AppThunk => {
    return async (dispatch) => {
        const res = await securityAPI.getCaptcha()
        dispatch(setCaptcha(res.url))
    }
}

//--------------------------------PROFILE-THUNK--------------------------------
export const getProfileTC = (userID: number | null): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await profileAPI.getProfile(userID);
            dispatch(setUserProfile(data));
        } catch (error) {
            // Handle error
        }
    };
};

export const getUserStatusTC = (userId: string): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await profileAPI.getStatus(userId);
            dispatch(setStatusAC(res));
        } catch (error) {
            // Handle error
        }
    };
};

export const updateStatusTC = (status: string): AppThunk => {
    return async (dispatch) => {
        try {
            await profileAPI.updateStatus(status);
            dispatch(setStatusAC(status));
        } catch (error) {
            // Handle error
        }
    };
};

export const savePhotoTC = (file: File): AppThunk => {
    return async (dispatch) => {
        let res = await profileAPI.savePhoto(file)
        if (res.resultCode === ResultCode.SUCCEED) {
            dispatch(setPhotoSuccess(res.data))
        }
    }
}

export const saveProfileTC = (profile: UserProfile): AppThunk => {
    return async (dispatch, getState) => {
        const userId = getState().profilePage.profile?.userId||29875
        let res = await profileAPI.saveProfile(profile)
        if (res.resultCode === ResultCode.SUCCEED) {
            await dispatch(getProfileTC(userId))
            return Promise.resolve()
        } else if (res.resultCode === ResultCode.ERROR) {
            const errorMessage = res.messages[0].split(' ')
            const contactError = errorMessage[errorMessage.length - 1].split('->')
            const contact = contactError[contactError.length - 1].slice(0, -1).toLowerCase()
            dispatch(stopSubmit('Contacts', {'contacts': {[contact]: res.messages[0]}}))
            return Promise.reject(res.messages[0])
        }
    }
}

//------------------------------USERS-THUNK------------------------------
export const getUsersTC = (currentPage: number, pageSize: number, users: UserType[]): AppThunk => {
    return async (dispatch) => {
        if (users.length === 0) {
            dispatch(toggleIsFetching(true));
            try {
                const data = await usersAPI.getUsers(currentPage, pageSize);
                dispatch(setUser(data.items));
                dispatch(toggleIsFetching(false));
                dispatch(setTotalUserCount(data.totalCount));
            } catch (error) {
                // Handle error
            }
        }
    };
};

export const pageChangedTC = (pageNumber: number, pageSize: number): AppThunk => {
    return async (dispatch) => {
        dispatch(setPage(pageNumber));
        dispatch(toggleIsFetching(true));
        try {
            const data = await usersAPI.getUsers(pageNumber, pageSize);
            dispatch(setUser(data.items));
            dispatch(toggleIsFetching(false));
        } catch (error) {
            // Handle error
        }
    };
};

export const followTC = (id: number): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        try {
            const data = await usersAPI.follow(id);
            if (data.resultCode === ResultCode.SUCCEED) {
                dispatch(follow(id));
            }
            dispatch(toggleIsFollowing(false, id));
        } catch (error) {
            // Handle error
        }
    };
};

export const unFollowTC = (id: number): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        try {
            const data = await usersAPI.unfollow(id);
            if (data.resultCode === ResultCode.SUCCEED) {
                dispatch(unfollow(id));
            }
            dispatch(toggleIsFollowing(false, id));
        } catch (error) {
            // Handle error
        }
    };
};


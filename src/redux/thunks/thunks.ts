import {
    follow, initializedSucceed,
    setAuthUserData, setPage, setPhotoSuccess, setStatusAC,
    setTotalUserCount, setUser,
    setUserProfile,
    toggleIsFetching,
    toggleIsFollowing, unfollow
} from "../actions/actions";
import {authAPI, profileAPI, usersAPI, UserType} from "../../api/social-network-api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "../store";

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
            const res = await authAPI.authMe();
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setAuthUserData(id, login, email, true));
            }
        } catch (error) {
            // Handle error
        }
    };
};

export const LoginTC = (log: string, pass: string, remember: boolean): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.login(log, pass, remember);
            if (res.data.resultCode === 0) {
                await dispatch(authMeTC());
            } else {
                dispatch(stopSubmit('login', {_error: res.data.messages[0] || 'Some error'}));
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
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        } catch (error) {
            // Handle error
        }
    };
};

//--------------------------------PROFILE-THUNK--------------------------------
export const getProfileTC = (userID: string): AppThunk => {
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
            dispatch(setStatusAC(res.data));
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
        if (res.data.resultCode === 0) {
            dispatch(setPhotoSuccess(res.data.data))
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
            if (data.resultCode === 0) {
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
            if (data.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(toggleIsFollowing(false, id));
        } catch (error) {
            // Handle error
        }
    };
};


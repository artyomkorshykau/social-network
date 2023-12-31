import {actions} from "../actions/actions";
import {stopSubmit} from "redux-form";
import {ResultCode} from "../../common/enums/response";
import {authAPI} from "../../api/auth-api";
import {securityAPI} from "../../api/security-api";
import {profileAPI} from "../../api/profile-api";
import {UserProfile, UserType} from "../../api/types/types-api";
import {usersAPI} from "../../api/user-api";
import {chatAPI, EventStatus} from "../../api/chat-api";
import {Dispatch} from "redux";
import {ChatMessageApi} from "../../pages/chat/chat";
import {AppThunk} from "../store/store";
import {Filter} from "../reducers/users-reducer";

//-------------------------------APP-THUNK-------------------------------
const initialized = (): AppThunk => {
    return async (dispatch) => {
        const res = dispatch(authMe())
        Promise.all([res])
            .then(() => {
                dispatch(actions.initializedSucceed)
            })
    };
};

//-------------------------------AUTH-THUNK-------------------------------
const authMe = (): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.me();
            if (res.resultCode === ResultCode.SUCCEED) {
                let {id, login, email} = res.data
                dispatch(actions.setAuthUserData(id, login, email, true));
            }
        } catch (error) {
            // Handle error
        }
    };
};

const login = (log: string, pass: string, remember: boolean, captcha: string | null): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.login(log, pass, captcha, remember);
            if (res.resultCode === ResultCode.SUCCEED) {
                await dispatch(authMe());
            } else {
                if (res.resultCode === ResultCode.CAPTCHA) {
                    await dispatch(getCaptcha())
                }
                let message = res.messages.length > 0 ? res.messages[0] : 'Some Error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        } catch (error) {
            // Handle error
        }
    };
};

const logout = (): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.logout();
            if (res.resultCode === ResultCode.SUCCEED) {
                dispatch(actions.setAuthUserData(null, null, null, false));
            }
        } catch (error) {
            // Handle error
        }
    };
};

const getCaptcha = (): AppThunk => {
    return async (dispatch) => {
        const res = await securityAPI.getCaptcha()
        dispatch(actions.setCaptcha(res.url))
    }
}

//--------------------------------PROFILE-THUNK--------------------------------
const getProfile = (userID: number | null): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await profileAPI.getProfile(userID);
            dispatch(actions.setUserProfile(data));
        } catch (error) {
            // Handle error
        }
    };
};

const getUserStatus = (userId: string): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await profileAPI.getStatus(userId);
            dispatch(actions.setStatus(res));
        } catch (error) {
            // Handle error
        }
    };
};

const updateStatus = (status: string): AppThunk => {
    return async (dispatch) => {
        try {
            await profileAPI.updateStatus(status);
            dispatch(actions.setStatus(status));
        } catch (error) {
            // Handle error
        }
    };
};

const savePhoto = (file: File): AppThunk => {
    return async (dispatch) => {
        let res = await profileAPI.savePhoto(file)
        if (res.resultCode === ResultCode.SUCCEED) {
            dispatch(actions.setPhotoSuccess(res.data))
        }
    }
}

const saveProfile = (profile: UserProfile): AppThunk => {
    return async (dispatch, getState) => {
        const userId = getState().profilePage.profile?.userId || 29875
        let res = await profileAPI.saveProfile(profile)
        if (res.resultCode === ResultCode.SUCCEED) {
            await dispatch(getProfile(userId))
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
const getUsers = (currentPage: number, pageSize: number, filter: Filter): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
            dispatch(actions.toggleIsFetching(true));
            dispatch(actions.setUser(data.items));
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setTotalUserCount(data.totalCount));
        } catch (error) {
            // Handle error
        }
    }
};

const pageChanged = (pageNumber: number, pageSize: number, filter: Filter): AppThunk => {
    return async (dispatch) => {
        dispatch(actions.setPage(pageNumber));
        dispatch(actions.setUserFilter(filter));
        dispatch(actions.toggleIsFetching(true));
        try {
            const data = await usersAPI.getUsers(pageNumber, pageSize, filter.term, filter.friend);
            dispatch(actions.setUser(data.items));
            dispatch(actions.toggleIsFetching(false));
        } catch (error) {
            // Handle error
        }
    };
};

const follow = (id: number): AppThunk => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFollowing(true, id));
        try {
            const data = await usersAPI.follow(id);
            if (data.resultCode === ResultCode.SUCCEED) {
                dispatch(actions.follow(id));
            }
            dispatch(actions.toggleIsFollowing(false, id));
        } catch (error) {
            // Handle error
        }
    };
};

const unFollow = (id: number): AppThunk => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFollowing(true, id));
        try {
            const data = await usersAPI.unfollow(id);
            if (data.resultCode === ResultCode.SUCCEED) {
                dispatch(actions.unfollow(id));
            }
            dispatch(actions.toggleIsFollowing(false, id));
        } catch (error) {
            // Handle error
        }
    };
};

//-------------------------------CHAT-THUNK-------------------------------
let _newMessageHandler: ((messages: ChatMessageApi[]) => void) | null = null
let _statusChangeHandler: ((status: EventStatus) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangeHandler === null) {
        _statusChangeHandler = (status) => {
            dispatch(actions.socketStatusChanged(status))
        }
    }
    return _statusChangeHandler
}
const messagesListening = () => async (dispatch: Dispatch) => {
    chatAPI.createConnection()
    chatAPI.subscribe('message-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
const stopMessagesListening = () => async (dispatch: Dispatch) => {
    chatAPI.unsubscribe('message-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.deleteConnection()
}
const sendMessage = (message: string) => async () => {
    chatAPI.sendMessage(message)
}


export const thunks = {
    initialized,
    authMe,
    login,
    logout,
    getCaptcha,
    getProfile,
    getUserStatus,
    updateStatus,
    savePhoto,
    saveProfile,
    getUsers,
    pageChanged,
    follow,
    unFollow,
    messagesListening,
    stopMessagesListening,
    sendMessage
}


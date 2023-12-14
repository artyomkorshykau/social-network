import {ProfilePhoto} from "../../components/Profile/ProfileContainer";
import {UserProfile, UserType} from "../../api/types/typesApi";
import {ACTION_TYPE} from "../../common/enums/Actions";


//-------------------------------APP-ACTION-------------------------------
export const initializedSucceed = () => ({type: ACTION_TYPE.SET_INITIALIZED})

//-------------------------------AUTH-ACTION-------------------------------
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: ACTION_TYPE.SET_USER_DATA, payload: {userId, login, email, isAuth}})
export const setCaptcha = (captcha: string | null) =>
    ({type: ACTION_TYPE.SET_CAPTCHA, payload: {captcha}})

//-------------------------------DIALOGS-ACTION-------------------------------
export const sendMessageAC = (newMessageBody: string) =>
    ({type: ACTION_TYPE.SEND_MESSAGE, newMessageBody} as const)

//--------------------------------PROFILE-ACTION--------------------------------
export const addPostAC = (text: string) =>
    ({type: ACTION_TYPE.ADD_POST, newPostText: text} as const)
export const deletePostAC = (id: string) =>
    ({type: ACTION_TYPE.DELETE_POST, id} as const)
export const setUserProfile = (profile: UserProfile) =>
    ({type: ACTION_TYPE.SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) =>
    ({type: ACTION_TYPE.SET_STATUS, status} as const)
export const setPhotoSuccess = (photos: ProfilePhoto) =>
    ({type: ACTION_TYPE.SET_PHOTO, photos} as const)

//------------------------------USERS-ACTION------------------------------
export const follow = (id: number) =>
    ({type: ACTION_TYPE.FOLLOW, id}) as const
export const unfollow = (id: number) =>
    ({type: ACTION_TYPE.UNFOLLOW, id}) as const
export const setUser = (user: UserType[]) =>
    ({type: ACTION_TYPE.SET_USER, user}) as const
export const setPage = (currentPage: number) =>
    ({type: ACTION_TYPE.SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUserCount = (totalCount: number) =>
    ({type: ACTION_TYPE.SET_TOTAL_USER_COUNT, totalCount}) as const
export const toggleIsFetching = (fetching: boolean) =>
    ({type: ACTION_TYPE.IS_FETCHING, fetching}) as const
export const toggleIsFollowing = (fetching: boolean, id: number) =>
    ({type: ACTION_TYPE.IS_FOLLOWING, fetching, id}) as const

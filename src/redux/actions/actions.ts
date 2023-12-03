import {ProfilePhoto, ProfileUserType} from "../../components/Profile/ProfileContainer";
import {UserType} from "../../api/social-network-api";
import {ACTIONS_TYPE} from './actionTypes'


//-------------------------------APP-ACTION-------------------------------
export const initializedSucceed = () => ({type: ACTIONS_TYPE.SET_INITIALIZED})

//-------------------------------AUTH-ACTION-------------------------------
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: ACTIONS_TYPE.SET_USER_DATA, payload: {userId, login, email, isAuth}})

//-------------------------------DIALOGS-ACTION-------------------------------
export const sendMessageAC = (newMessageBody: string) =>
    ({type: ACTIONS_TYPE.SEND_MESSAGE, newMessageBody} as const)

//--------------------------------PROFILE-ACTION--------------------------------
export const addPostAC = (text: string) =>
    ({type: ACTIONS_TYPE.ADD_POST, newPostText: text} as const)
export const deletePostAC = (id: string) =>
    ({type: ACTIONS_TYPE.DELETE_POST, id} as const)
export const setUserProfile = (profile: ProfileUserType) =>
    ({type: ACTIONS_TYPE.SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) =>
    ({type: ACTIONS_TYPE.SET_STATUS, status} as const)
export const setPhotoSuccess = (photos: ProfilePhoto) =>
    ({type: ACTIONS_TYPE.SET_PHOTO, photos} as const)

//------------------------------USERS-ACTION------------------------------
export const follow = (id: number) =>
    ({type: ACTIONS_TYPE.FOLLOW, id}) as const
export const unfollow = (id: number) =>
    ({type: ACTIONS_TYPE.UNFOLLOW, id}) as const
export const setUser = (user: UserType[]) =>
    ({type: ACTIONS_TYPE.SET_USER, user}) as const
export const setPage = (currentPage: number) =>
    ({type: ACTIONS_TYPE.SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUserCount = (totalCount: number) =>
    ({type: ACTIONS_TYPE.SET_TOTAL_USER_COUNT, totalCount}) as const
export const toggleIsFetching = (fetching: boolean) =>
    ({type: ACTIONS_TYPE.IS_FETCHING, fetching}) as const
export const toggleIsFollowing = (fetching: boolean, id: number) =>
    ({type: ACTIONS_TYPE.IS_FOLLOWING, fetching, id}) as const

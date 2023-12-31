import {UserProfile, UserType} from "../../api/types/typesApi";
import {ACTION_TYPE} from "../../common/enums/Actions";
import {Filter} from "../users-reducer";
import {ProfilePhoto} from "../../components/Profile/ProfilePage";


//-------------------------------APP-ACTION-------------------------------
const initializedSucceed = () => ({type: ACTION_TYPE.SET_INITIALIZED})

//-------------------------------AUTH-ACTION-------------------------------
const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: ACTION_TYPE.SET_USER_DATA, payload: {userId, login, email, isAuth}})
const setCaptcha = (captcha: string | null) =>
    ({type: ACTION_TYPE.SET_CAPTCHA, payload: {captcha}})

//-------------------------------DIALOGS-ACTION-------------------------------
const sendMessage = (newMessageBody: string) =>
    ({type: ACTION_TYPE.SEND_MESSAGE, newMessageBody} as const)

//--------------------------------PROFILE-ACTION--------------------------------
const addPost = (text: string) =>
    ({type: ACTION_TYPE.ADD_POST, newPostText: text} as const)
const deletePost = (id: string) =>
    ({type: ACTION_TYPE.DELETE_POST, id} as const)
const setUserProfile = (profile: UserProfile) =>
    ({type: ACTION_TYPE.SET_USER_PROFILE, profile} as const)
const setStatus = (status: string) =>
    ({type: ACTION_TYPE.SET_STATUS, status} as const)
const setPhotoSuccess = (photos: ProfilePhoto) =>
    ({type: ACTION_TYPE.SET_PHOTO, photos} as const)

//------------------------------USERS-ACTION------------------------------
const follow = (id: number) =>
    ({type: ACTION_TYPE.FOLLOW, id}) as const
const unfollow = (id: number) =>
    ({type: ACTION_TYPE.UNFOLLOW, id}) as const
const setUser = (user: UserType[]) =>
    ({type: ACTION_TYPE.SET_USER, user}) as const
const setPage = (currentPage: number) =>
    ({type: ACTION_TYPE.SET_CURRENT_PAGE, currentPage}) as const
const setTotalUserCount = (totalCount: number) =>
    ({type: ACTION_TYPE.SET_TOTAL_USER_COUNT, totalCount}) as const
const toggleIsFetching = (fetching: boolean) =>
    ({type: ACTION_TYPE.IS_FETCHING, fetching}) as const
const toggleIsFollowing = (fetching: boolean, id: number) =>
    ({type: ACTION_TYPE.IS_FOLLOWING, fetching, id}) as const
const setUserFilter = (filter: Filter) =>
    ({type: ACTION_TYPE.USER_FILTER, payload: filter}) as const


export const actions = {
    initializedSucceed,
    setAuthUserData,
    setCaptcha,
    sendMessage,
    addPost,
    deletePost,
    setUserProfile,
    setStatus,
    setPhotoSuccess,
    follow,
    unfollow,
    setUser,
    setPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleIsFollowing,
    setUserFilter
}
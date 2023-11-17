import {ProfileUserType} from "../../components/Profile/ProfileContainer";
import {UserType} from "../../api/social-network-api";


//-------------------------------APP-ACTION-------------------------------
export const initializedSucceed = () => ({type: 'SET_INITIALIZED'})

//-------------------------------AUTH-ACTION-------------------------------
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: 'SET_USER_DATA', payload: {userId, login, email, isAuth}})

//-------------------------------DIALOGS-ACTION-------------------------------
export const sendMessageAC = (newMessageBody: string) =>
    ({type: 'SEND-MESSAGE', newMessageBody} as const)

//--------------------------------PROFILE-ACTION--------------------------------
export const addPostAC = (text: string) =>
    ({type: 'ADD-POST', newPostText: text} as const)
export const setUserProfile = (profile: ProfileUserType) =>
    ({type: 'SET_USER_PROFILE', profile} as const)
export const setStatusAC = (status: string) =>
    ({type: 'SET-STATUS', status} as const)

//------------------------------USERS-ACTION------------------------------
export const follow = (id: number) =>
    ({type: 'FOLLOW', id}) as const
export const unfollow = (id: number) =>
    ({type: 'UNFOLLOW', id}) as const
export const setUser = (user: UserType[]) =>
    ({type: 'SET_USER', user}) as const
export const setPage = (currentPage: number) =>
    ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setTotalUserCount = (totalCount: number) =>
    ({type: 'SET_TOTAL_USER_COUNT', totalCount}) as const
export const toggleIsFetching = (fetching: boolean) =>
    ({type: 'IS_FETCHING', fetching}) as const
export const toggleIsFollowing = (fetching: boolean, id: number) =>
    ({type: 'IS_FOLLOWING', fetching, id}) as const

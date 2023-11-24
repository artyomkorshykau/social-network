import {UserType} from "../api/social-network-api";
import {
    follow,
    setPage,
    setTotalUserCount,
    setUser,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow
} from "./actions/actions";
import {ACTIONS_TYPE} from "./actions/actionTypes";

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
}

const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)
            }
        case ACTIONS_TYPE.UNFOLLOW :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)
            }
        case ACTIONS_TYPE.SET_USER:
            return {...state, users: action.user}
        case ACTIONS_TYPE.SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case ACTIONS_TYPE.SET_TOTAL_USER_COUNT :
            return {...state, totalUserCount: action.totalCount}
        case ACTIONS_TYPE.IS_FETCHING:
            return {...state, isFetching: action.fetching}
        case ACTIONS_TYPE.IS_FOLLOWING: {
            return <InitialStateType>{
                ...state, isFollowing: action.fetching
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id != action.id)
            }
        }
        default :
            return state
    }
}
export default usersReducer


//------------------------------TYPES------------------------------
export type UsersActionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowing>

type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean,
    isFollowing: []
}
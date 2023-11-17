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
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)
            }
        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)
            }
        case 'SET_USER' :
            return {...state, users: action.user}
        case 'SET_CURRENT_PAGE' :
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USER_COUNT' :
            return {...state, totalUserCount: action.totalCount}
        case 'IS_FETCHING':
            return {...state, isFetching: action.fetching}
        case 'IS_FOLLOWING': {
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
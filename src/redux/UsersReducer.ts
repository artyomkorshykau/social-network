import {UsersInfoType} from "../api/social-network-api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

type ActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setPageAC>
    | ReturnType<typeof setTotalUserCountAC>

type UsersType = {
    users: UsersInfoType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
}
let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2
}

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)
            }
        case SET_USER :
            return {...state, users: action.user}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT :
            return {...state, totalUserCount: action.totalCount}
        default :
            return state
    }
}

export const followAC = (id: number) => ({type: FOLLOW, id}) as const
export const unfollowAC = (id: number) => ({type: UNFOLLOW, id}) as const
export const setUserAC = (user: UsersInfoType[]) => ({type: SET_USER, user}) as const
export const setPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUserCountAC = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount}) as const
import {UserType} from "../api/social-network-api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const IS_FETCHING = 'IS_FETCHING'

type ActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>

type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
            debugger
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT :
            return {...state, totalUserCount: action.totalCount}
        case IS_FETCHING:
            return {...state, isFetching: action.fetching}
        default :
            return state
    }
}
export default usersReducer

export const follow = (id: number) => ({type: FOLLOW, id}) as const
export const unfollow = (id: number) => ({type: UNFOLLOW, id}) as const
export const setUser = (user: UserType[]) => ({type: SET_USER, user}) as const
export const setPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUserCount = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount}) as const
export const toggleIsFetching = (fetching: boolean) => ({type: IS_FETCHING, fetching}) as const
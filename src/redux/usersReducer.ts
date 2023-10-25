import {UserType} from "../api/social-network-api";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
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
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT :
            return {...state, totalUserCount: action.totalCount}
        case IS_FETCHING:
            return {...state, isFetching: action.fetching}
        case IS_FOLLOWING: {
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


//------------------------------ACTION CREATORS------------------------------
export const follow = (id: number) =>
    ({type: FOLLOW, id}) as const
export const unfollow = (id: number) =>
    ({type: UNFOLLOW, id}) as const
export const setUser = (user: UserType[]) =>
    ({type: SET_USER, user}) as const
export const setPage = (currentPage: number) =>
    ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUserCount = (totalCount: number) =>
    ({type: SET_TOTAL_USER_COUNT, totalCount}) as const
export const toggleIsFetching = (fetching: boolean) =>
    ({type: IS_FETCHING, fetching}) as const
export const toggleIsFollowing = (fetching: boolean, id: number) =>
    ({type: IS_FOLLOWING, fetching, id}) as const

//------------------------------THUNK CREATORS------------------------------
export const getUsersTC = (currentPage: number, pageSize: number, users: UserType[]) => {
    return (dispatch: Dispatch) => {
        if (users.length === 0) {
            dispatch(toggleIsFetching(true))
            usersAPI.getUsers(currentPage, pageSize)
                .then(data => {
                    dispatch(setUser(data.items))
                    dispatch(toggleIsFetching(false))
                    dispatch(setTotalUserCount(data.totalCount))
                })

        }
    }
}
export const pageChangedTC = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setPage(pageNumber))
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setUser(data.items))
                dispatch(toggleIsFetching(false))
            })
    }
}
export const followTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowing(true, id))
        usersAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleIsFollowing(false, id))
            })
    }
}
export const unFollowTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowing(true, id))
        usersAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleIsFollowing(false, id))
            })
    }
}

//------------------------------ACTION CREATORS TYPE------------------------------
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const IS_FETCHING = 'IS_FETCHING'
const IS_FOLLOWING = 'IS_FOLLOWING'

//------------------------------TYPES------------------------------
export type ActionType =
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
import {UsersInfoType} from "../api/social-network-api";

const follow = 'FOLLOW'
const unfollow = 'UNFOLLOW'
const setUser = 'SET_USER'

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUserAC>

type UsersType = {
    users: UsersInfoType[]
}
let initialState: UsersType = {
    users: []
}


export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case follow :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)
            }

        case unfollow :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)
            }
        case setUser :
            return {...state, users: action.user}
        default :
            return state
    }
}

export const followAC = (id: number) => ({type: follow, id}) as const
export const unfollowAC = (id: number) => ({type: unfollow, id}) as const
export const setUserAC = (user: UsersInfoType[]) => ({type: setUser, user}) as const
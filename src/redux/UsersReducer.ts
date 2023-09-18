import ava from '../img/ava.jpg'

const follow = 'FOLLOW'
const unfollow = 'UNFOLLOW'
const setUser = 'SET_USER'

type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUserAC>

let initialState = {
    users: []
}
export type InitialState = typeof initialState

export const usersReducer = (state: InitialState = initialState, action: ActionType): InitialState => {
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
            return <InitialState>{...state, users: [...state.users, action.user]}
        default :
            return state
    }
}

export type userType = {
    id: string
    photo: string
    followed: boolean
    fullName: string
    status: string
    location: locationType

}
export type locationType = {
    city: string
    country: string
}

export const followAC = (id: string) => ({type: follow, id}) as const
export const unfollowAC = (id: string) => ({type: unfollow, id}) as const
export const setUserAC = (user: userType[]) => ({type: setUser, user}) as const
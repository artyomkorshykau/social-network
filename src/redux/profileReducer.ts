import {ProfileUserType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

let initialState: InitialStateType = {
    posts: [
        {id: '1', message: 'Hi', likeCounts: '10'},
        {id: '2', message: 'By', likeCounts: '5'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: '5',
                message: action.newPostText,
                likeCounts: '0'
            }
            return {...state, posts: [newPost, ...state.posts]}
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}
export default profileReducer

//--------------------------------ACTION CREATORS TYPE--------------------------------
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET-STATUS'

//--------------------------------ACTION CREATORS--------------------------------
export const addPostAC = (text: string) =>
    ({type: ADD_POST, newPostText: text} as const)
export const setUserProfile = (profile: ProfileUserType) =>
    ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) =>
    ({type: SET_STATUS, status} as const)

//--------------------------------THUNK CREATORS--------------------------------
export const getProfileTC = (userID: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })

    }
}

export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch((setStatusAC(res.data)))
            })
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(res => {
                dispatch(setStatusAC(status))
            })
    }
}


//--------------------------------TYPES--------------------------------
export type PostsType = {
    id: string
    message: string
    likeCounts: string
}
export type InitialStateType = {
    posts: PostsType[]
    profile: null | ProfileUserType
    status: string
}
type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
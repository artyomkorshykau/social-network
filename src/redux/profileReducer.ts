import {ProfileUserType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

let initialState: InitialStateType = {
    posts: [
        {id: '1', message: 'Hi', likeCounts: '10'},
        {id: '2', message: 'By', likeCounts: '5'}
    ],
    newPostText: 'Hello',
    profile: null
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: '5',
                message: action.newPostText,
                likeCounts: '0'
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case UPDATE_NEW_POST_TEXT :
            return {...state, newPostText: action.postMessage}
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export default profileReducer

//--------------------------------ACTION CREATORS TYPE--------------------------------
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

//--------------------------------ACTION CREATORS--------------------------------
export const addPostAC = (text: string) =>
    ({type: ADD_POST, newPostText: text} as const)
export const updateNewPostMessageAC = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, postMessage: text} as const)
export const setUserProfile = (profile: ProfileUserType) =>
    ({type: SET_USER_PROFILE, profile} as const)

//--------------------------------THUNK CREATORS--------------------------------
export const getProfileTC = (userID: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
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
    newPostText: string
    profile: null | ProfileUserType
}
type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostMessageAC>
    | ReturnType<typeof setUserProfile>
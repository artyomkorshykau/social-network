import {ProfileUserType} from "../components/Profile/ProfileContainer";
import {addPostAC, setStatusAC, setUserProfile} from "./actions/actions";

let initialState: InitialStateType = {
    posts: [
        {id: '1', message: 'Hi', likeCounts: '10'},
        {id: '2', message: 'By', likeCounts: '5'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost = {
                id: '5',
                message: action.newPostText,
                likeCounts: '0'
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}
export default profileReducer


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
export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
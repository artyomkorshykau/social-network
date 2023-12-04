import {ProfileUserType} from "../components/Profile/ProfileContainer";
import {addPostAC, deletePostAC, setPhotoSuccess, setStatusAC, setUserProfile} from "./actions/actions";
import {ACTIONS_TYPE} from "./actions/actionTypes";

export let initialState = {
    posts: [
        {id: '1', message: 'Hi', likeCounts: '10'},
        {id: '2', message: 'By', likeCounts: '5'}
    ],
    profile: null as ProfileType,
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST :
            let newPost = {
                id: '5',
                message: action.newPostText,
                likeCounts: '0'
            }
            return {...state, posts: [newPost, ...state.posts]}
        case ACTIONS_TYPE.SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case ACTIONS_TYPE.SET_STATUS:
            return {...state, status: action.status}
        case ACTIONS_TYPE.DELETE_POST:
            return {
                ...state, posts: state.posts.filter((el) => el.id != action.id)
            }
        case ACTIONS_TYPE.SET_PHOTO :
            if (state.profile) {
                return {
                    ...state,
                    profile: {...state.profile, photos: {...state.profile.photos, ...action.photos}}
                }
            }
            return {...state}
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
    profile: ProfileType
    status: string
}

export type ProfileType = ProfileUserType | null

export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setPhotoSuccess>
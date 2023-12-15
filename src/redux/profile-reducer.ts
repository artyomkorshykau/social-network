import {addPostAC, deletePostAC, setPhotoSuccess, setStatusAC, setUserProfile} from "./actions/actions";
import {ACTION_TYPE} from "../common/enums/Actions";
import {UserProfile} from "../api/types/typesApi";

export let initialState = {
    posts: [
        {id: '1', message: 'Hi', likeCounts: '10'},
        {id: '2', message: 'By', likeCounts: '5'}
    ],
    profile: null as Profile,
    status: ''
}

const profileReducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case ACTION_TYPE.ADD_POST :
            let newPost = {
                id: '5',
                message: action.newPostText,
                likeCounts: '0'
            }
            return {...state, posts: [newPost, ...state.posts]}
        case ACTION_TYPE.SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case ACTION_TYPE.SET_STATUS:
            return {...state, status: action.status}
        case ACTION_TYPE.DELETE_POST:
            return {
                ...state, posts: state.posts.filter((el) => el.id != action.id)
            }
        case ACTION_TYPE.SET_PHOTO :
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
export type Post = {
    id: string
    message: string
    likeCounts: string
}
export type InitialState = {
    posts: Post[]
    profile: Profile
    status: string
}

export type Profile = UserProfile | null

export type Action =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setPhotoSuccess>
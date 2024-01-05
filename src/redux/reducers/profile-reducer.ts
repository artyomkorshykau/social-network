import {ACTION_TYPE} from "../../common/enums/actions";
import {UserProfile} from "../../api/types/types-api";
import {actions} from "../actions/actions";


export let initialState = {
    posts: [
        {id: '1', message: 'Привет всем', likeCounts: '10'},
        {id: '2', message: 'Я вылупился', likeCounts: '5'}
    ],
    profile: null as Profile,
    status: ''
}

const profileReducer = (state: InitialState = initialState, action: ProfileActions): InitialState => {
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

export type ProfileActions =
    | ReturnType<typeof actions.addPost>
    | ReturnType<typeof actions.setUserProfile>
    | ReturnType<typeof actions.setStatus>
    | ReturnType<typeof actions.deletePost>
    | ReturnType<typeof actions.setPhotoSuccess>
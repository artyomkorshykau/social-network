import {ProfileUserType} from "../components/Profile/ProfileContainer";
import {addPostAC, deletePostAC, setStatusAC, setUserProfile} from "./actions/actions";
import {ACTIONS_TYPE} from "./actions/actionTypes";

export let initialState: InitialStateType = {
    posts: [
        {id: '1', message: 'Hi', likeCounts: '10'},
        {id: '2', message: 'By', likeCounts: '5'}
    ],
    profile: null,
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
    | ReturnType<typeof deletePostAC>
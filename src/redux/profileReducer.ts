import {ActionType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostsType = {
    id: string
    message: string
    likeCounts: string
}
export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
}

let initialState = {
    posts: [
        {id: '1', message: 'Hi', likeCounts: '10'},
        {id: '2', message: 'By', likeCounts: '5'}
    ],
    newPostText: 'Hello'
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: '5',
                message: action.newPostText,
                likeCounts: '0'
            }
            state.posts.push(newPost)
            return state
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.postMessage
            debugger
            return state
        default:
            return state
    }
}

export const addPostAC = (text: string) => ({type: ADD_POST, newPostText: text} as const)
export const updateNewPostMessageAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, postMessage: text} as const)

export default profileReducer
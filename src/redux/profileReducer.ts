import {ActionType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    debugger
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
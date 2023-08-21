import {ActionType, StateType} from "./store";
import dialogsReducer from "./dialogsReducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: StateType, action: ActionType) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: '5',
            message: state.profilePage.newPostText,
            likeCounts: '0'
        }
        state.profilePage.posts.push(newPost)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.profilePage.newPostText = action.postMessage
    } else {
        return state
    }
}

export default profileReducer
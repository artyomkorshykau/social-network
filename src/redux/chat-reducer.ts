import {ChatMessage} from "../pages/ChatPage/ChatPage";
import {ACTION_TYPE} from "../common/enums/Actions";

let initialState = {
    messages: [] as ChatMessage[]
}

export const chatReducer = (state: InitialState = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE.MESSAGES_RECEIVED: {
            return {...state, messages: [...state.messages, ...action.payload.messages]}
        }
        default:
            return state
    }
}

type InitialState = typeof initialState


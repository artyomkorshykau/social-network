import {ChatMessage} from "../pages/ChatPage/ChatPage";
import {ACTION_TYPE} from "../common/enums/Actions";

let initialState = {
    messages: [] as ChatMessage[],
    status: 'pending' as 'pending' | 'ready'
}

export const chatReducer = (state: InitialState = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE.MESSAGES_RECEIVED: {
            return {...state, messages: [...state.messages, ...action.payload.messages]}
        }
        case ACTION_TYPE.SET_SOCKETSTATUS: {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }
}

type InitialState = typeof initialState


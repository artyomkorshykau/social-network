import {ActionType, StateType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: StateType, action: ActionType) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.dialogsPage.newMessageBody = action.body

    } else if (action.type === SEND_MESSAGE) {
        let body = state.dialogsPage.newMessageBody
        state.dialogsPage.newMessageBody = ''
        state.dialogsPage.messages.push({id: '1', title: body})
    } else {
        return state
    }
}

export default dialogsReducer
let initialState = {
    dialogs: [
        {id: '1', name: 'Лежана Раздвиногова'},
        {id: '2', name: 'Бздашек Западловский'},
        {id: '3', name: 'Сри Бестреску'},
        {id: '4', name: 'Мацал Кошек'},
        {id: '5', name: 'Жарь-Лук де Блюю'},
        {id: '6', name: 'Хельга Шлюхер'},
        {id: '7', name: 'Отлов Приматов'}
    ],
    messages: [
        {id: '1', title: 'Hi'},
        {id: '2', title: 'Where'},
        {id: '3', title: 'is'},
        {id: '4', title: 'my'},
        {id: '5', title: 'money'},
        {id: '6', title: 'fucking'},
        {id: '7', title: 'dog?'}
    ],
    newMessageBody: ''
}

type ActionType = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

const dialogsReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE :
            let body = state.newMessageBody
            return {...state, messages: [...state.messages, {id: '1', title: body}], newMessageBody: ''}
        default:
            return state
    }
}
export default dialogsReducer

//-------------------------------ACTION CREATORS TYPES-------------------------------
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

//-------------------------------ACTION CREATORS-------------------------------
export const updateNewMessageBodyAC = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
export const sendMessageAC = () =>
    ({type: SEND_MESSAGE} as const)

//-------------------------------TYPES-------------------------------
export type ProfilePageType = typeof initialState
export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    title: string
}
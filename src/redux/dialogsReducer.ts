const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type InitialStateType = typeof initialState
type DialogsType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    title: string
}

let initialState = {
    dialogs: [
        {id: '1', name: 'Лежана Раздвиногова'},
        {id: '2', name: 'Бздашек Западловский'},
        {id: '3', name: 'Сри Бестреску'},
        {id: '4', name: 'Мацал Кошек'},
        {id: '5', name: 'Жарь-Лук де Блюю'},
        {id: '6', name: 'Хельга Шлюхер'},
        {id: '7', name: 'Отлов Приматов'}
    ] as DialogsType[],
    messages: [
        {id: '1', title: 'Hi'},
        {id: '2', title: 'Where'},
        {id: '3', title: 'is'},
        {id: '4', title: 'my'},
        {id: '5', title: 'money'},
        {id: '6', title: 'fucking'},
        {id: '7', title: 'dog?'}
    ] as MessageType[],
    newMessageBody: ''
}


const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE :
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: '1', title: body})
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)

export default dialogsReducer
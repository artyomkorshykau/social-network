import {sendMessageAC} from "./actions/actions";
import {ACTION_TYPE} from "../common/enums/Actions";

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
    ]
}

const dialogsReducer = (state: ProfilePage = initialState, action: DialogsAction): ProfilePage => {
    switch (action.type) {
        case ACTION_TYPE.SEND_MESSAGE :
            let body = action.newMessageBody
            return {...state, messages: [...state.messages, {id: '1', title: body}]}
        default:
            return state
    }
}
export default dialogsReducer


//-------------------------------TYPES-------------------------------
export type ProfilePage = typeof initialState
export type Dialog = {
    id: string
    name: string
}
export type Messages = {
    id: string
    title: string
}

export type DialogsAction = | ReturnType<typeof sendMessageAC>
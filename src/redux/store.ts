import profileReducer, {addPostAC, updateNewPostMessageAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer"

//----------------STATE-TYPE----------------
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string

}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type PostsType = {
    id: string
    message: string
    likeCounts: string
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    title: string
}

//----------------STORE-TYPE----------------
export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}


//----------------STORE----------------
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi', likeCounts: '10'},
                {id: '2', message: 'By', likeCounts: '5'}
            ],
            newPostText: 'Hello'
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: StateType) {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        debugger
        let res = this.getState().profilePage
        debugger
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}






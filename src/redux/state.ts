export type DialogsDataPropsType = {
    id: string
    name: string
}
export type MessageDataPropsType = {
    id: string
    title: string
}
export type PostsDataPropsType = {
    id: string
    message: string
    likeCounts: string
}
export type StatePropsType = {
    profilePage: ProfilePropsType
    messagePage: MessagePropsType
}
export type MessagePropsType = {
    messageData: MessageDataPropsType[]
}
export type ProfilePropsType = {
    dialogsData: DialogsDataPropsType[],
    postsData: PostsDataPropsType[],
    newPostText: string
}
export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    postMessage: string
}
export type ActionType = AddPostActionType | UpdateNewPostActionType
export type StoreType = {
    _state: StatePropsType
    _callSubscriber: (state: StatePropsType) => void
    subscribe: (observer: (state: StatePropsType) => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionType) => void
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export let store: StoreType = {
    _state: {
        profilePage: {
            dialogsData: [
                {id: '1', name: 'Лежана Раздвиногова'},
                {id: '2', name: 'Бздашек Западловский'},
                {id: '3', name: 'Сри Бестреску'},
                {id: '4', name: 'Мацал Кошек'},
                {id: '5', name: 'Жарь-Лук де Блюю'},
                {id: '6', name: 'Хельга Шлюхер'},
                {id: '7', name: 'Отлов Приматов'}
            ],
            postsData: [
                {id: '1', message: 'Hi', likeCounts: '10'},
                {id: '2', message: 'By', likeCounts: '5'}
            ],
            newPostText: 'Hello'
        },
        messagePage: {
            messageData: [
                {id: '1', title: 'Hi'},
                {id: '2', title: 'Where'},
                {id: '3', title: 'is'},
                {id: '4', title: 'my'},
                {id: '5', title: 'money'},
                {id: '6', title: 'fucking'},
                {id: '7', title: 'dog?'}
            ]
        }
    },
    _callSubscriber(state: StatePropsType) {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: '5',
                message: this.getState().profilePage.newPostText,
                likeCounts: '0'
            }
            this._state.profilePage.postsData.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.postMessage
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = (text: string) => ({type: ADD_POST, newPostText: text} as const)

export const updateNewPostMessage = (text: string) => ({type: UPDATE_NEW_POST_TEXT, postMessage: text} as const)




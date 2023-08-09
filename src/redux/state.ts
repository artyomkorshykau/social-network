import {rerenderDom} from "../render";

export let state = {
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
        ]
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
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id: '5',
        message: postMessage,
        likeCounts: '0'
    }

    state.profilePage.postsData.push(newPost)
    rerenderDom()
}

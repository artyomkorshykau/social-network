import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

export const dialogsData = [
    {id: '1', name: 'Лежана Раздвиногова'},
    {id: '2', name: 'Бздашек Западловский'},
    {id: '3', name: 'Сри Бестреску'},
    {id: '4', name: 'Мацал Кошек'},
    {id: '5', name: 'Жарь-Лук де Блюю'},
    {id: '6', name: 'Хельга Шлюхер'},
    {id: '7', name: 'Отлов Приматов'}
]
export const messageData = [
    {id: '1', title: 'Hi'},
    {id: '2', title: 'Where'},
    {id: '3', title: 'is'},
    {id: '4', title: 'my'},
    {id: '5', title: 'money'},
    {id: '6', title: 'fucking'},
    {id: '7', title: 'dog?'}
]
export const postsData = [
    {id: '1', message: 'Hi', likeCounts: '10'},
    {id: '2', message: 'By', likeCounts: '5'}
]

ReactDOM.render(
    <App
        dialogsData={dialogsData}
        messageData={messageData}
        postsData={postsData}/>,
    document.getElementById('root')
);
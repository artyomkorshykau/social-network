import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id

    return (<div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (<div className={s.dialog}>{props.message}</div>)
}

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Лежана Раздвиногова' id='1'/>
                    <DialogItem name='Бздашек Западловский' id='2'/>
                    <DialogItem name='Сри Бестреску' id='3'/>
                    <DialogItem name='Мацал Кошек' id='4'/>
                    <DialogItem name='Жарь-Лук де Блюю' id='5'/>
                    <DialogItem name='Хельга Шлюхер' id='6'/>
                    <DialogItem name='Отлов Приматов' id='7'/>

                </div>
                <div className={s.messages}>
                    <Message message='Hi'/>
                    <Message message='How are you?'/>
                    <Message message='Where is my money fag?'/>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
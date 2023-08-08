import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataPropsType, MessageDataPropsType} from "../../App";

type DialogsPropsType = {
    dialogsData: DialogsDataPropsType[]
    messageData: MessagePropsType[]
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsItem = props.dialogsData.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
    const messageItem = props.messageData.map(message => <Message message={message.title}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsItem}</div>
                <div className={s.messages}>{messageItem}</div>
            </div>

        </div>
    )
}

export default Dialogs
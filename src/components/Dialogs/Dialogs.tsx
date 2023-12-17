import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Dialog, Messages} from "../../redux/dialogs-reducer";
import {store} from "../../redux/store";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";
import {Props} from "./DialogsContainer";


const Dialogs = (props: Props) => {

    let dialogsPage = store.getState().dialogsPage

    let dialogsItem = dialogsPage.dialogs
        .map((dialogs: Dialog, index) => <DialogItem key={index}
                                                     name={dialogs.name}
                                                     id={dialogs.id}/>)
    let messageItem = dialogsPage.messages
        .map((message: Messages, index) => <Message key={index}
                                                    message={message.title}/>)

    const addNewMessage = (values: MessageBody) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

export type MessageBody = {
    newMessageBody: string
}

export default Dialogs
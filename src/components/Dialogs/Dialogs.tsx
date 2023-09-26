import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {store} from "../../redux/redux-store";
import {DialogsType, MessageType} from "../../redux/dialogsReducer";
import {DialogsPropsType} from "./Message/DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsPage = store.getState().dialogsPage

    let dialogsItem = dialogsPage.dialogs.map((dialogs: DialogsType) => <DialogItem name={dialogs.name}
                                                                                    id={dialogs.id}/>)
    let messageItem = dialogsPage.messages.map((message: MessageType) => <Message message={message.title}/>)

    let newMessageBody = dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.updateNewMessageBody(message)
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsItem}</div>
                <div className={s.messages}>
                    <div>{messageItem}</div>
                    <div><textarea placeholder={'Enter your message'}
                                   value={newMessageBody}
                                   onChange={onNewMessageChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
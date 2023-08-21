import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, StoreType, updateNewMessageBodyAC} from "../../redux/store";

type DialogsPropsType = {
    store: StoreType
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsItem = state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messageItem = state.messages.map(message => <Message message={message.title}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
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
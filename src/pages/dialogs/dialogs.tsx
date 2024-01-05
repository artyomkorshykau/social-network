import React from "react";
import s from './dialogs.module.css'
import {actions} from "../../redux/actions/actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {useDialogsData} from "../../utils/hooks/useDialogsData";
import {Dialog, Messages} from "../../redux/reducers/dialogs-reducer";
import {DialogItem} from "../../components/dialog-Item/dialog-item";
import {AddMessageForm} from "../../components/add-message-form/add-message-form";
import {Message} from "../../components/dialog-message/dialog-message";


const Dialogs = withAuthRedirect(() => {

    const {dialogsPage} = useDialogsData()

    let dialogsItem = dialogsPage.dialogs
        .map((dialogs: Dialog, index) => <DialogItem key={index}
                                                     name={dialogs.name}
                                                     id={dialogs.id}/>)
    let messageItem = dialogsPage.messages
        .map((message: Messages, index) => <Message key={index}
                                                    message={message.title}/>)

    const addNewMessage = (values: MessageBody) => {
        actions.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
            </div>
            <AddMessageForm/>
        </div>
    )
})

export type MessageBody = {
    newMessageBody: string
}

export default Dialogs
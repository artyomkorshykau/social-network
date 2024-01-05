import React from "react";
import s from './message.module.css'
import {ChatMessage} from "../../pages/chat/chat";

type Props = {
    message: ChatMessage
}
export const Message = React.memo(({message}: Props) => {

    const id = message.userId

    return <div className={id === 29875 ? s.userMessage : s.message}>
        <div>
            <img src={message.photo} alt={'avatar'} width={'40px'}/>
        </div>
        <div className={s.messageBlock}>
            <span>{message.userName}</span>
            <p>{message.message}</p>
        </div>


    </div>
})
import {Message} from "./Message/Message";
import s from './Messages.module.css'
import {useEffect, useState} from "react";
import {ChatMessage} from "../ChatPage";

type Props = {
    socket: WebSocket
}
export const Messages = ({socket}: Props) => {

    const [messages, setMessages] = useState<ChatMessage[]>([])

    useEffect(() => {
        socket.addEventListener('message', (event: MessageEvent) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(event.data)])
        })

    }, []);

    return <div className={s.messages}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
    </div>
}
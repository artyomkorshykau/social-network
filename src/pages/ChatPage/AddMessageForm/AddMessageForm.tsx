import {ChangeEventHandler, useState} from "react";
import {message} from "antd";

type Props = {
    socket: WebSocket
}
export const AddMessageForm = ({socket}: Props) => {

    const [messageText, setMessageText] = useState('')

    const sendMessageHandler = () => {
        socket.send(messageText)
        setMessageText('')
    }

    return <div>
        <div>
            <textarea onChange={(event) => setMessageText(event.currentTarget.value)} value={messageText}></textarea>
        </div>
        <div>
            <button onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}
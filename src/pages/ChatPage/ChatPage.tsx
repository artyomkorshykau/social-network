import React from "react";
import {Chat} from "./Chat/Chat";

export type ChatMessageApi = {
    message: string
    photo: string
    userId: number
    userName: string
}

export type ChatMessage = ChatMessageApi & { id: string }

const ChatPage = () => {

    return <div>
        <Chat/>
    </div>
}

export default ChatPage
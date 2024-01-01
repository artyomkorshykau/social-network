import React from "react";
import {Chat} from "./Chat/Chat";

export type ChatMessage = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage = () => {

    return <div>
        <Chat/>
    </div>
}

export default ChatPage
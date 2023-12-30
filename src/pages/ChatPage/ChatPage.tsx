import React from "react";
import {Chat} from "./Chat/Chat";

export type ChatMessage = {
    message: string
    photo: string
    userId: number
    userName: string
}

const socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
const ChatPage = () => {

    return <div>
        <Chat socket={socket}/>
    </div>
}

export default ChatPage
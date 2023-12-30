import {AddMessageForm} from "../AddMessageForm/AddMessageForm";
import {Messages} from "../Messages/Messages";
import {useEffect} from "react";

type Props = {
    socket: WebSocket
}
export const Chat = ({socket}: Props) => {

    return <div>
        <Messages socket={socket}/>
        <AddMessageForm socket={socket}/>
    </div>
}
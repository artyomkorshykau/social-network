import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Messages} from "./Messages/messages";
import {getSocketStatus} from "../../utils/selectors/userSelectors";
import {thunks} from "../../redux/thunks/thunks";
import {AddMessageForm} from "./add-message-form/add-message-form";

export type ChatMessageApi = {
    message: string
    photo: string
    userId: number
    userName: string
}

export type ChatMessage = ChatMessageApi & { id: string }

const Chat = () => {

    const dispatch = useDispatch()
    const status = useSelector(getSocketStatus)

    useEffect(() => {
        dispatch(thunks.messagesListening())
        return () => {
            dispatch(thunks.stopMessagesListening())
        }
    }, []);


    return <div>
        {status === 'error' && <div>Error! Please refresh the page.</div>}
        <Messages/>
        <AddMessageForm/>
    </div>
}

export default Chat
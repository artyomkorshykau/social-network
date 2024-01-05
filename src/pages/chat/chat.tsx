import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {thunks} from "../../redux/thunks/thunks";
import {getSocketStatus} from "../../utils/selectors/chat-selectors/chat-selectors";
import {Messages} from "./messages/messages";
import {AddMessageForm} from "../../components/add-message-form/add-message-form";

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
        {status === 'error' && <div>Ошибка! Обновите страницу.</div>}
        <Messages/>
        <AddMessageForm/>
    </div>
}

export default Chat
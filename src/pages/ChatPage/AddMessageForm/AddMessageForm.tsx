import {useState} from "react";
import {useDispatch} from "react-redux";
import {thunks} from "../../../redux/thunks/thunks";

export const AddMessageForm = () => {

    const [messageText, setMessageText] = useState('')

    const dispatch = useDispatch()
    const sendMessageHandler = () => {
        if (!messageText) {
            return
        }
        dispatch(thunks.sendMessage(messageText))
        setMessageText('')
    }

    return <div>
        <div>
            <textarea onChange={(event) => setMessageText(event.currentTarget.value)} value={messageText}></textarea>
        </div>
        <div>
            <button onClick={sendMessageHandler}>Отправить</button>
        </div>
    </div>
}
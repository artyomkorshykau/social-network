import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {thunks} from "../../../redux/thunks/thunks";
import {getSocketStatus} from "../../../utils/selectors/userSelectors";

export const AddMessageForm = () => {

    const [messageText, setMessageText] = useState('')
    const socketStatus = useSelector(getSocketStatus)

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
            <button disabled={socketStatus === 'pending'} onClick={sendMessageHandler}>Отправить</button>
        </div>
    </div>
}
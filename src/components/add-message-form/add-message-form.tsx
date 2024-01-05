import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './add-message-form.module.css'
import {Button} from "antd";
import {getSocketStatus} from "../../utils/selectors/chat-selectors/chat-selectors";
import {thunks} from "../../redux/thunks/thunks";

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

    return <div className={s.AddMessageForm}>
        <div className={s.textarea}>
            <textarea onChange={(event) => setMessageText(event.currentTarget.value)}
                      value={messageText}
                      placeholder={'Введите сообщение петухам'}/>
        </div>
        <div>
            <Button type={'primary'} disabled={socketStatus === 'pending'}
                    onClick={sendMessageHandler}>Отправить</Button>
        </div>
    </div>
}




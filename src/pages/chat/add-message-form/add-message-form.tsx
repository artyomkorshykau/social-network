import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {thunks} from "../../../redux/thunks/thunks";
import {getSocketStatus} from "../../../utils/selectors/userSelectors";
import s from './add-message-form.module.css'
import {Button} from "antd";

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
                      placeholder={'Enter your message'}/>
        </div>
        <div>
            <Button type={'primary'} disabled={socketStatus === 'pending'}
                    onClick={sendMessageHandler}>Отправить</Button>
        </div>
    </div>
}


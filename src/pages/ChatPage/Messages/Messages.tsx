import {Message} from "./Message/Message";
import s from './Messages.module.css'
import {useSelector} from "react-redux";
import {getChatMessages} from "../../../utils/selectors/userSelectors";

export const Messages = () => {

    const messages = useSelector(getChatMessages)

    return <div className={s.messages}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
    </div>
}
import {Message} from "./Message/Message";
import s from './Messages.module.css'
import {useSelector} from "react-redux";
import {getChatMessages} from "../../../utils/selectors/userSelectors";
import {useEffect, useRef} from "react";

export const Messages = () => {

    const messages = useSelector(getChatMessages)

    const messageAnchorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messageAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages]);

    return <div className={s.messages}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
        <div ref={messageAnchorRef}></div>
    </div>
}
import {Message} from "./Message/Message";
import s from './Messages.module.css'
import {useSelector} from "react-redux";
import {getChatMessages} from "../../../utils/selectors/userSelectors";
import React, {useEffect, useRef, useState} from "react";

export const Messages = () => {

    const messages = useSelector(getChatMessages)

    const messageAnchorRef = useRef<HTMLDivElement>(null)
    const [autoScroll, setAutoScroll] = useState(false)

    const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = event.currentTarget
        if ((Math.abs(element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !autoScroll && setAutoScroll(true)
        } else {
            autoScroll && setAutoScroll(false)
        }
    }

    useEffect(() => {
        if (autoScroll) {
            messageAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages]);

    return <div className={s.messages} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message message={m} key={index}/>)}
        <div ref={messageAnchorRef}></div>
    </div>
}
import s from "../Dialogs.module.css";
import React from "react";

export const Message: React.FC<MessagePropsType> = (props) => {
    return (<div className={s.dialog}>{props.message}</div>)
}

//--------------------------------TYPES--------------------------------
type MessagePropsType = {
    message: string
}

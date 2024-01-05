import s from ".//message.module.css";
import React from "react";

type Props = {
    message: string
}

export const Message = ({message}: Props) => {
    return (<div className={s.dialog}>{message}</div>)
}

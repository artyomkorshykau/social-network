import s from "../Dialogs.module.css";
import React from "react";

type Props = {
    message: string
}

export const Message = (props: Props) => {
    return (<div className={s.dialog}>{props.message}</div>)
}

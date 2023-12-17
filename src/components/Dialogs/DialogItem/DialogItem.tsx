import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type Props = {
    name: string
    id: string
}

export const DialogItem = ({name, id}: Props) => {
    let path = '/dialogs/' + id

    return (<div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{name}</NavLink>
    </div>)
}


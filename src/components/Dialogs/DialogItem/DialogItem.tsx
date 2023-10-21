import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id

    return (<div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

//--------------------------------TYPES--------------------------------
type DialogItemPropsType = {
    name: string
    id: string
}
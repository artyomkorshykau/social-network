import {NavLink} from "react-router-dom";
import photo from "../../img/photo.png";
import s from "./user.module.css";
import React from "react";
import {UserType} from "../../api/types/types-api";
import {Button} from "antd";

type Props = {
    isFollowing: []
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    user: UserType
}

export const User = ({user, unFollowTC, followTC, isFollowing}: Props) => {

    return (<div className={s.user}>
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}><img
                    src={user.photos.small ? user.photos.small : photo}
                    alt=""
                    className={s.userPhoto}/>
                </NavLink>
            </div>
        </div>

        <div>
            <div className={s.userName}>{user.name}</div>

        </div>
        <div>
            <div className={s.userStatus}>{user.status}</div>
        </div>
        <div>
            <div className={s.userId}>ID: {user.id}</div>
        </div>
        <div>
            <div>{user.followed}</div>
        </div>
        <div>
            <div>{user.followed
                ? <Button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                    unFollowTC(user.id)
                }}>Отписаться</Button>
                : <Button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                    followTC(user.id)
                }}>Подписаться</Button>}
            </div>
        </div>
    </div>)
}




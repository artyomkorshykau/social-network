import {NavLink} from "react-router-dom";
import photo from "../../img/photo.png";
import s from "./user.module.css";
import React from "react";
import {UserType} from "../../api/types/types-api";

type Props = {
    isFollowing: []
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    user: UserType
}

export const User = ({user, unFollowTC, followTC, isFollowing}: Props) => {

    return (<div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}><img
                            src={user.photos.small ? user.photos.small : photo}
                            alt=""
                            className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>{user.followed
                        ? <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                            unFollowTC(user.id)
                        }}>Отписаться</button>
                        : <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                            followTC(user.id)
                        }}>Подписаться</button>}
                            </div>
                            </span>
        <span>
                            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            </span>
                            <span>
                            <div>{user.id}</div>
                            <div>{user.followed}</div>
                            </span>
                            </span>
    </div>)
}




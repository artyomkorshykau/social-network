import {NavLink} from "react-router-dom";
import photo from "../../img/photo.png";
import s from "./Users.module.css";
import React from "react";
import {UserType} from "../../api/social-network-api";

type UserPropsType = {
    isFollowing: []
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    user: UserType
}

export const User = (props: UserPropsType) => {

    let {user} = props

    return (<div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}><img
                            src={user.photos.small ? user.photos.small : photo}
                            alt=""
                            className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>{user.followed
                        ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                            props.unFollowTC(user.id)
                        }}>Отписаться</button>
                        : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                            props.followTC(user.id)
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




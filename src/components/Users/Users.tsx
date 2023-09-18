import React from 'react'
import s from '../Users/users.module.css'
import {userType} from "../../redux/UsersReducer";
import axios from "axios";

type UsersPropsType = {
    users: userType[]
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUser: (user: userType[]) => void
}

export const Users = (props: UsersPropsType) => {

    axios.get('https://social-network.samuraijs.com/api/1.1/users')
        .then(res => {
            props.setUser(res.data.items)
        })

    return <div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div><img src={el.photo} alt="" className={s.userPhoto}/></div>
                    <div>{el.followed
                        ? <button onClick={() => {
                            props.unfollow(el.id)
                        }}>Отписаться</button>
                        : <button onClick={() => {
                            props.follow(el.id)
                        }}>Подписаться</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
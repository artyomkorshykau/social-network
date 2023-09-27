import React from 'react';
import s from "./users.module.css";
import ava from "../../img/ava.jpg";
import {UsersInfoType} from "../../api/social-network-api";
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

type UserFCPropsType = {
    onPageChanged: (page: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: UsersInfoType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFetching: boolean
}

const UserFC = (props: UserFCPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let arrayOfPages = []
    for (let i = 1; i <= pagesCount; i++) {
        arrayOfPages.push(i)
    }

    return (
        <div>
            <div>
                {arrayOfPages.map(el => {
                    return <span className={props.currentPage === el
                        ? s.selectedPage
                        : ''} onClick={() => {
                        props.onPageChanged(el)
                    }}> {el} </span>
                })}
            </div>
            {
                props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}><img src={el.photos.small ? el.photos.small : ava} alt=""
                                                               className={s.userPhoto}/>
                        </NavLink>
                    </div>
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
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.id}</div>
                        <div>{el.followed}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
};

export default UserFC;
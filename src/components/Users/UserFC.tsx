import React from 'react';
import s from "./users.module.css";
import ava from "../../img/ava.jpg";
import {UserType} from "../../api/social-network-api";
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UserFCPropsType = {
    onPageChanged: (page: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFetching: boolean
}

const UserFC = (props: UserFCPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }
    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return (
        <div>
            <div>
                {slicedPages.map((el, index) => {
                    return <span key={index} className={props.currentPage === el
                        ? s.selectedPage
                        : ''} onClick={() => {
                        props.onPageChanged(el)
                    }}> {el} </span>
                })}
            </div>
            {
                props.users.map((el) => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}><img src={el.photos.small ? el.photos.small : ava} alt=""
                                                               className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>{el.followed
                        ? <button onClick={() => {
                            usersAPI.following(el.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(el.id)
                                    }
                                })

                        }}>Отписаться</button>
                        : <button onClick={() => {

                            usersAPI.following(el.id,)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                })


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
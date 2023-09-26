import React from 'react'
import s from '../Users/users.module.css'
import ava from '../../img/ava.jpg'
import axios from "axios";
import {UsersClassType} from "./UsersContainer";


class Users extends React.Component<UsersClassType> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setUser(res.data.items)
                    this.props.setTotalUserCount(res.data.totalCount)
                })
        }
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUser(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let arrayOfPages = []
        for (let i = 1; i <= pagesCount; i++) {
            arrayOfPages.push(i)
        }

        return (<div>
            <div>
                {arrayOfPages.map(el => {
                    return <span className={this.props.currentPage === el
                        ? s.selectedPage
                        : ''} onClick={() => {
                        this.onPageChanged(el)
                    }}> {el} </span>
                })}
            </div>
            {
                this.props.users.map(el => <div key={el.id}>
                <span>
                    <div><img src={el.photos.small ? el.photos.small : ava} alt="" className={s.userPhoto}/></div>
                    <div>{el.followed
                        ? <button onClick={() => {
                            this.props.unfollow(el.id)
                        }}>Отписаться</button>
                        : <button onClick={() => {
                            this.props.follow(el.id)
                        }}>Подписаться</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{'el.fullName'}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>)
    }
}

export default Users
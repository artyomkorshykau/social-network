import s from "../MyPost.module.css";
import profileAva from "../../../../img/ava.jpg";
import React from "react";

type PostPropsType = {
    message: string,
    likeCounts: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={profileAva} alt=""/>
            {props.message}
            <div>
                <span>Like </span>
                {props.likeCounts}
            </div>
        </div>
    )
}

export default Post
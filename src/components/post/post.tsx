import s from "./post.module.css";
import profileAva from "../../img/photo.png";
import React from "react";

type Props = {
    message: string,
    likeCounts: string
}

const Post = ({message, likeCounts}: Props) => {
    return (
        <div className={s.item}>
            <img src={profileAva} alt=""/>
            {message}
            <div>
                <span>Нравиться </span>
                {likeCounts}
            </div>
        </div>
    )
}

export default Post


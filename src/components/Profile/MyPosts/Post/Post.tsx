import s from "../MyPost.module.css";
import profileAva from "../../../../img/photo.png";
import React from "react";

type Props = {
    message: string,
    likeCounts: string
}

const Post: React.FC<Props> = (props) => {
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


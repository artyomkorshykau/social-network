import s from "../MyPost.module.css";
import profileAva from "../../../../img/photo.png";
import React from "react";

const Post: React.FC<PostPropsType> = (props) => {
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

//--------------------------------TYPES--------------------------------

type PostPropsType = {
    message: string,
    likeCounts: string
}

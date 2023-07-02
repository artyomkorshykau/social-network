import headerimg from "../../img/back.jpg";
import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = () => {
    return (<div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, Gitter' likeCounts='10'/>
                <Post message='Hi, Stalin' likeCounts='5'/>
            </div>
        </div>
    </div>)
}

export default MyPost
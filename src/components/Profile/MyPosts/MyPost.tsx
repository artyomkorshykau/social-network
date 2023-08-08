import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {PostsDataPropsType} from "../../../index";


type MyPostsPropsType = {
    postsData: PostsDataPropsType[]
}

const MyPost = (props: MyPostsPropsType) => {

    const posts = props.postsData.map(posts => <Post message={posts.message} likeCounts={posts.likeCounts}/>)

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
            <div className={s.posts}>{posts}</div>
        </div>
    </div>)
}

export default MyPost
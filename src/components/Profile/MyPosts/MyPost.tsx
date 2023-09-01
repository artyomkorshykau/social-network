import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {store} from "../../../redux/redux-store";
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    updateNewPostText: () => void
    addPost: () => void
    posts: PostsType[]
    newPostText: string
}


const MyPost: React.FC<MyPostsPropsType> = (props) => {
    const posts = props.posts.map(posts => <Post message={posts.message}
                                                 likeCounts={posts.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    return (<div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={props.updateNewPostText}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{posts}</div>
        </div>
    </div>)
}

export default MyPost
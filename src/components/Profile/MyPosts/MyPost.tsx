import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post"
import {Props} from "./MyPostContainer";
import {AddNewPostReduxForm} from "./AddNewPostForm";

const MyPost = React.memo((props: Props) => {

    const posts = props.posts.map((posts, index) => <Post key={index} message={posts.message}
                                                          likeCounts={posts.likeCounts}/>)

    let onAddPost = (values: any) => {
        props.addPost(values.newPostElement)
    }

    return (<div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>{posts}</div>
        </div>
    </div>)
});

export default MyPost
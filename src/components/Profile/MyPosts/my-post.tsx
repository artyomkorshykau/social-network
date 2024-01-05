import React from "react";
import s from './my-post.module.css'
import Post from "./post/post"
import {useMyPostsData} from "../../../utils/hooks/useMyPostsData";
import {actions} from "../../../redux/actions/actions";
import {AddNewPostReduxForm} from "./add-new-post-form/add-new-post-form";
import {MessageBody} from "../../../pages/dialogs/dialogs";

const MyPost = React.memo(() => {

    const {posts, dispatch} = useMyPostsData()

    const mappedPosts = posts.map((posts, index) => <Post key={index} message={posts.message}
                                                          likeCounts={posts.likeCounts}/>)

    let onAddPost = (values: MessageBody) => {
        dispatch(actions.addPost(values.newMessageBody))
    }

    return (<div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>{mappedPosts}</div>
        </div>
    </div>)
});

export default MyPost
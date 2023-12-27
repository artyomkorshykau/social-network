import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post"
import {AddNewPostReduxForm} from "./AddNewPostForm";
import {MessageBody} from "../../Dialogs/Dialogs";
import {useMyPostsData} from "../../../utils/hooks/useMyPostsData";
import {actions} from "../../../redux/actions/actions";

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
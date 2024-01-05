import React from "react";
import s from './my-post.module.css'
import {useMyPostsData} from "../../../utils/hooks/useMyPostsData";
import {actions} from "../../../redux/actions/actions";
import Post from "../../../components/post/post";
import {MessageBody} from "../../dialogs/dialogs";
import {AddNewPostReduxForm} from "../../../components/add-new-post-form/add-new-post-form";

const MyPost = React.memo(() => {

    const {posts, dispatch} = useMyPostsData()

    const mappedPosts = posts.map((posts, index) => <Post key={index} message={posts.message}
                                                          likeCounts={posts.likeCounts}/>)

    let onAddPost = (values: MessageBody) => {
        dispatch(actions.addPost(values.newMessageBody))
    }

    return (<div className={s.content}>
        <div className={s.postBlock}>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>{mappedPosts}</div>
        </div>
    </div>)
});

export default MyPost
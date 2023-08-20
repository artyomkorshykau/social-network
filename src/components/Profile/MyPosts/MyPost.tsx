import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {ActionType, addPostActionCreator, PostsDataPropsType, updateNewPostMessage} from "../../../redux/state";

type MyPostsPropsType = {
    dispatch: (action: ActionType) => void
    posts: PostsDataPropsType[]
    newPostText: string
}


const MyPost = (props: MyPostsPropsType) => {
    const posts = props.posts.map(posts => <Post message={posts.message}
                                                 likeCounts={posts.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(addPostActionCreator(text))
        }
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', postMessage: ''})
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(updateNewPostMessage(text))
        }

    }

    return (<div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{posts}</div>
        </div>
    </div>)
}

export default MyPost
import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post"
import {MyPostsPropsType} from "./MyPostContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {TextArea} from "../../../common/FormControls/FormControls";

const MyPost = React.memo((props: MyPostsPropsType) => {
    console.log('render')

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

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostElement'}
                    component={TextArea}
                    validate={[required, maxLength10]}
                    placeholder={'Post message'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPost
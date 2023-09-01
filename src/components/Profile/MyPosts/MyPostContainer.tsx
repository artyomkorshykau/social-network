import React from "react";
import {addPostAC, updateNewPostMessageAC} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = () => {

    return (
        <StoreContext.Consumer> {(store) => {
            const addPost = () => {
                store.dispatch(addPostAC())
            }
            const onPostChange = (text: string) => {
                let action = updateNewPostMessageAC(text)
                store.dispatch(action)
            }

            let profilePage = store.getState().profilePage
            return <MyPost updateNewPostText={onPostChange}
                           addPost={addPost}
                           posts={profilePage.posts}
                           newPostText={profilePage.newPostText}/>
        }}
        </StoreContext.Consumer>
    )
}

export default MyPostContainer
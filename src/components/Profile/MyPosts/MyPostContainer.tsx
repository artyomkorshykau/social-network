import React, {ChangeEvent} from "react";
import {addPostAC, PostsType, updateNewPostMessageAC} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType, store} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let action = updateNewPostMessageAC(e.currentTarget.value)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC(store.getState().profilePage.newPostText))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
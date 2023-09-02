import React from "react";
import {addPostAC, PostsType, updateNewPostMessageAC} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType, StoreReduxType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStateToPropsType | MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostMessageAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
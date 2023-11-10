import React from "react";
import {addPostAC, PostsType} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostElement: string) => {
            dispatch(addPostAC(newPostElement))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)


//--------------------------------TYPES--------------------------------
type MapStateToPropsType = {
    posts: PostsType[]
}
type MapDispatchToPropsType = {
    addPost: (newPostElement: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

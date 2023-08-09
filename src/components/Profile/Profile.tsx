import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostsDataPropsType} from "../../App";


type ProfilePropsType = {
    postsData: PostsDataPropsType[]
    addPost: (value: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (<div>
        <ProfileInfo/>
        <MyPost postsData={props.postsData} addPost={props.addPost}/>
    </div>)
}

export default Profile
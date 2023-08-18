import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePropsType
    addPost: (value: string) => void
    updateNewPostTest: (text: string) => void
}

const Profile = (props: ProfileType) => {
    debugger
    return (<div>
        <ProfileInfo/>
        <MyPost profilePage={props.profilePage}
                updateNewPostTest={props.updateNewPostTest}
                addPost={props.addPost}/>
    </div>)
}

export default Profile
import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfileType) => {
    return (<div>
        <ProfileInfo/>
        <MyPost posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
    </div>)
}

export default Profile
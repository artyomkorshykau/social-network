import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType, ProfilePropsType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePropsType
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfileType) => {
    return (<div>
        <ProfileInfo/>
        <MyPost posts={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
    </div>)
}

export default Profile
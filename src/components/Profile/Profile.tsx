import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileUserType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileUserType|null
}

const Profile = (props: ProfilePropsType) => {
    return (<div>
        <ProfileInfo profile={props.profile}/>
        <MyPostContainer/>
    </div>)
}

export default Profile
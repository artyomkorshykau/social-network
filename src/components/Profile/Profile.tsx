import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileUserType} from "./ProfileContainer";
import s from '../Profile/Profile.module.css'


const Profile = (props: ProfilePropsType) => {

    return (<div>
        <ProfileInfo profile={props.profile}/>
        <MyPostContainer/>
    </div>)
}

export default Profile


//--------------------------------TYPES--------------------------------
type ProfilePropsType = {
    profile: ProfileUserType | null
}

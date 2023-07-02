import headerImg from "../../img/back.jpg";
import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (<div>
        <ProfileInfo/>
        <MyPost/>
    </div>)
}

export default Profile
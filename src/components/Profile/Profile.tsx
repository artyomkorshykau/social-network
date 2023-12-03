import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileUserType} from "./ProfileContainer";


const Profile = (props: ProfilePropsType) => {

    return (<div>
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
        />
        <MyPostContainer/>
    </div>)
}

export default Profile


//--------------------------------TYPES--------------------------------
type ProfilePropsType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

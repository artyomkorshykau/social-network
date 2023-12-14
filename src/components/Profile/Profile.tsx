import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileDataForm} from "./ProfileContainer";
import {UserProfile} from "../../api/types/typesApi";

type Props = {
    profile: UserProfile | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataForm) => Promise<void>
}


const Profile = (props: Props) => {

    return (<div>
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
        />
        <MyPostContainer/>
    </div>)
}

export default Profile

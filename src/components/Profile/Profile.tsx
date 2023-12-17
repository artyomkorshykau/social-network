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


const Profile = ({profile, saveProfile, savePhoto, status, updateStatus, isOwner}: Props) => {

    return (<div>
        <ProfileInfo
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            isOwner={isOwner}
            savePhoto={savePhoto}
            saveProfile={saveProfile}
        />
        <MyPostContainer/>
    </div>)
}

export default Profile

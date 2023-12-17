import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileDataForm} from "../ProfileContainer";
import photo from '../../../img/photo.png'
import ProfileStatus from "../ProfileStatus";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataReduxForm} from './ProfileDataForm/ProfileDataForm';
import {Profile} from "../../../redux/profile-reducer";

type Props = {
    profile: Profile
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataForm) => Promise<void>
}

const ProfileInfo = ({saveProfile, profile, savePhoto, isOwner, status, updateStatus}: Props) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const changeMainPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataForm) => {

        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            }).catch(e => {
        })
    }

    return (
        <div>
            <div className={s.diskBlock}>
                <img src={profile.photos.large || photo} alt="" className={s.ava}/>

                <div>{isOwner &&
                    <input type={'file'} onChange={changeMainPhotoHandler}/>}</div>

                <ProfileStatus profileStatus={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataReduxForm profile={profile}
                                            isOwner={isOwner}
                                            setEditMode={setEditMode}
                                            onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   setEditMode={setEditMode}/>}


            </div>
        </div>
    );
};

export default ProfileInfo;

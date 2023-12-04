import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileDataForm, ProfileUserType} from "../ProfileContainer";
import photo from '../../../img/photo.png'
import ProfileStatus from "../ProfileStatus";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataReduxForm} from './ProfileDataForm/ProfileDataForm';
import {ProfileType} from "../../../redux/profile-reducer";

const ProfileInfo = (props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const changeMainPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataForm) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div>
            <div className={s.diskBlock}>
                <img src={props.profile.photos.large || photo} alt="" className={s.ava}/>

                <div>{props.isOwner &&
                    <input type={'file'} onChange={changeMainPhotoHandler}/>}</div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                {editMode
                    ? <ProfileDataReduxForm profile={props.profile}
                                            isOwner={props.isOwner}
                                            setEditMode={setEditMode}
                                            onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   setEditMode={setEditMode}/>}


            </div>
        </div>
    );
};

export default ProfileInfo;


//--------------------------------TYPES--------------------------------
type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataForm) => Promise<void>
}

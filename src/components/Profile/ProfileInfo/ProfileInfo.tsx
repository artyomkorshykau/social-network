import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileUserType} from "../ProfileContainer";
import photo from '../../../img/photo.png'
import ProfileStatus from "../ProfileStatus";


const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const changeMainPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.diskBlock}>
                <img src={props.profile.photos.large || photo} alt="" className={s.ava}/>
                {props.isOwner && <input type={'file'} onChange={changeMainPhotoHandler}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>- {props.profile.aboutMe}</div>
                <div>- {props.profile.lookingForAJob}</div>
                <div>- {props.profile.fullName}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;

//--------------------------------TYPES--------------------------------
type ProfileInfoPropsType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

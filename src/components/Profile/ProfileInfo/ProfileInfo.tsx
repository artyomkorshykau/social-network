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

const ProfileInfo = (props: Props) => {

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
                console.log('lol')
                setEditMode(false)
            }).catch(e => {
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

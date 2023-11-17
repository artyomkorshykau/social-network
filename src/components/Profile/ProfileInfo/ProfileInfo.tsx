import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileUserType} from "../ProfileContainer";
import ava from '../../../img/ava.jpg'
import ProfileStatus from "../ProfileStatus";


const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.diskBlock}>
                <img src={props.profile.photos.small || ava} alt="" className={s.ava}/>
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
}

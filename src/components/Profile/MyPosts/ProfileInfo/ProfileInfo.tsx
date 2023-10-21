import React from 'react';
import headerImg from "../../../../img/back.jpg";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../../common/Preloader/Preloader";
import {ProfileUserType} from "../../ProfileContainer";


const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={headerImg} alt="img"/>
            </div>
            <div className={s.diskBlock}>
                <img src={props.profile.photos.large} alt=""/>
                AVA + DISC
            </div>
        </div>
    );
};

export default ProfileInfo;

//--------------------------------TYPES--------------------------------
type ProfileInfoPropsType = {
    profile: ProfileUserType | null
}

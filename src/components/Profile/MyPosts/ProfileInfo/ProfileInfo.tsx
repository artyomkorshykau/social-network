import React from 'react';
import headerImg from "../../../../img/back.jpg";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={headerImg} alt="img"/>
            </div>
            <div className={s.diskBlock}>
                AVA + DISC
            </div>
        </div>
    );
};

export default ProfileInfo;
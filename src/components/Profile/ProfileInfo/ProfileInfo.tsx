import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/Preloader/Preloader";
import photo from '../../../img/photo.png'
import ProfileStatus from "../ProfileStatus";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataReduxForm} from './ProfileDataForm/ProfileDataForm';
import {useProfileData} from "../../../utils/hooks/useProfileData";
import {thunks} from "../../../redux/thunks/thunks";
import {UserProfile} from "../../../api/types/typesApi";
import {InfoCircleOutlined, UploadOutlined} from '@ant-design/icons';
import {Button, Collapse, CollapseProps, Flex, Spin, Upload} from 'antd';

type Props = {
    isOwner: boolean
}

const ProfileInfo = ({isOwner}: Props) => {

    const {profile, status, dispatch} = useProfileData()
    const {savePhoto, updateStatus, saveProfile} = thunks

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const changeMainPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    const onSubmit = (formData: UserProfile) => {
        dispatch(saveProfile(formData))
    }

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'More info',
            children: editMode
                ? <ProfileDataReduxForm profile={profile}
                                        isOwner={isOwner}
                                        setEditMode={setEditMode}
                                        onSubmit={onSubmit}/>
                : <ProfileData profile={profile}
                               isOwner={isOwner}
                               setEditMode={setEditMode}
                />
        }

    ]
    return (
        <div>
            <div className={s.diskBlock}>
                <img src={profile.photos.large || photo} alt="" className={s.ava}/>

                <div>{isOwner &&
                    <Upload {...changeMainPhotoHandler}>
                        <Button icon={<UploadOutlined/>}>Change photo</Button>
                    </Upload>}
                </div>

                <ProfileStatus profileStatus={status} updateStatus={updateStatus}/>

                <Collapse items={items} ghost/>

            </div>
        </div>
    );
};

export default ProfileInfo;

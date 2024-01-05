import {Contacts} from "../contacts/contacts";
import React from "react";
import {Button} from "antd";
import {UserProfile} from "../../api/types/types-api";
import {ProfileContacts} from "../../pages/profile/profile";

type Props = {
    profile: UserProfile
    isOwner: boolean
    setEditMode: (value: boolean) => void
}

export const ProfileData = ({profile, isOwner, setEditMode}: Props) => {
    return <>
        <div style={{marginTop: '10px'}}>
            <div><b>Полное имя</b>: {profile.fullName}</div>
            <div><b>Обо мне</b>: {profile.aboutMe}</div>
            <div><b>В поиске работы</b>: {profile.lookingForAJob ? '!Yes' : 'No!'}</div>
            <div><b>О желаемой работе</b>: {profile.lookingForAJobDescription}</div>
        </div>

        <div style={{marginTop: '10px'}}>
            <h4>Контакты </h4>
            <ul>
                {Object.keys(profile.contacts).map((el) => {
                    return <li style={{marginLeft: '20px'}}><Contacts title={el}
                                                                      value={profile.contacts[el as keyof ProfileContacts]}
                                                                      key={el}/></li>
                })}
            </ul>
            <div>
                {isOwner && <Button ghost
                                    type={'primary'}
                                    onClick={() => {
                                        setEditMode(true)
                                    }}
                >
                    Редактировать
                </Button>}
            </div>
        </div>
    </>
}


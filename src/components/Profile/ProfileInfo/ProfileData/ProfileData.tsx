import {Contacts} from "../Contacts/Contacts";
import React from "react";
import {UserProfile} from "../../../../api/types/typesApi";
import {ProfileContacts} from "../../ProfilePage";
import {Button} from "antd";

type Props = {
    profile: UserProfile
    isOwner: boolean
    setEditMode: (value: boolean) => void
}

export const ProfileData = ({profile, isOwner, setEditMode}: Props) => {
    return <>
        <div style={{marginTop: '10px'}}>
            <div><b>Full name</b>: {profile.fullName}</div>
            <div><b>About me</b>: {profile.aboutMe}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? '!Yes' : 'No!'}</div>
            <div><b>Looking for a job description</b>: {profile.lookingForAJobDescription}</div>
        </div>

        <div style={{marginTop: '10px'}}>
            <h4>Contacts </h4>
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


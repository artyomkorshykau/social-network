import {Contacts} from "../Contacts/Contacts";
import {ProfileContacts} from "../../ProfileContainer";
import React from "react";
import {UserProfile} from "../../../../api/types/typesApi";

type Props = {
    profile: UserProfile
    isOwner: boolean
    setEditMode: (value: boolean) => void
}

export const ProfileData = (props: Props) => {
    return <>
        <div style={{marginTop: '10px'}}>
            <div><b>Full name</b>: {props.profile.fullName}</div>
            <div><b>About me</b>: {props.profile.aboutMe}</div>
            <div><b>Looking for a job</b>: {props.profile.lookingForAJob ? '!Yes' : 'No!'}</div>
            <div><b>Looking for a job description</b>: {props.profile.lookingForAJobDescription}</div>
        </div>

        <div style={{marginTop: '10px'}}>
            <h4>Contacts </h4>
            <ul>
                {Object.keys(props.profile.contacts).map((el) => {
                    return <li style={{marginLeft: '20px'}}><Contacts title={el}
                                                                      value={props.profile.contacts[el as keyof ProfileContacts]}
                                                                      key={el}/></li>
                })}
            </ul>
            <div>{props.isOwner && <button onClick={() => {
                props.setEditMode(true)
            }}>Редактировать</button>}</div>
        </div>
    </>
}


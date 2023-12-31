import React from "react";
import {Input, TextArea} from "../../../../common/FormControls/FormControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UserProfile} from "../../../../api/types/typesApi";


type Props = {
    profile: UserProfile
    setEditMode: (value: boolean) => void
    isOwner: boolean
}


const ProfileDataForm = ({handleSubmit, profile, setEditMode}: Props & InjectedFormProps<UserProfile, Props>) => {
    return <form onSubmit={handleSubmit}>
        <div style={{marginTop: '10px', display: 'flex', flexDirection: 'column', width: '450px'}}>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>Full name</b> {<Field
                placeholder={'Full name'}
                component={Input}
                name={'fullName'}
                validate={[]}/>}</div>

            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>About me</b> {<Field
                placeholder={'About me'}
                component={TextArea}
                name={'aboutMe'}
                validate={[]}/>}</div>

            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>Looking for a job</b> {
                <Field placeholder={''}
                       component={Input}
                       name={'lookingForAJob'}
                       validate={[]}
                       type={'checkbox'}/>}</div>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>Looking for a job
                Description</b> {<Field placeholder={'Looking For A Job Description'}
                                        component={TextArea}
                                        name={'lookingForAJobDescription'}
                                        validate={[]}/>}</div>
        </div>

        <div style={{marginTop: '10px', width: '300px'}}>
            <h4>Contacts </h4>
            <ul>
                {Object
                    .keys(profile.contacts)
                    .map((el) => {
                        return <li style={{marginLeft: '20px'}}><b
                            style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}>{el}: {<Field
                            placeholder={el}
                            name={`contacts.${el}`}
                            validate={[]}
                            component={Input}
                            key={el}/>}</b>
                        </li>
                    })}
            </ul>
            <div>{<button onClick={() => {
                setEditMode(false)
            }}>Сохранить</button>}</div>
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm<UserProfile, Props>({form: 'Contacts'})(ProfileDataForm)
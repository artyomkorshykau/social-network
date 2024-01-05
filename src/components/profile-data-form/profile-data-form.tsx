import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "antd";
import {UserProfile} from "../../api/types/types-api";
import Input from "antd/lib/input/Input";
import {Textarea} from "../../common/form-control/form-control";


type Props = {
    profile: UserProfile
    setEditMode: (value: boolean) => void
    isOwner: boolean
}


const ProfileDataForm = ({
                             handleSubmit,
                             profile,
                             setEditMode,
                         }: Props & InjectedFormProps<UserProfile, Props>) => {
    const saveHandler = () => {
        setEditMode(false)
    }

    return <form onSubmit={handleSubmit}>
        <div style={{marginTop: '10px', display: 'flex', flexDirection: 'column', width: '450px'}}>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>Полное имя</b> {<Field
                placeholder={'Иван иванов'}
                component={Input}
                name={'fullName'}
                validate={[]}/>}</div>

            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>Обо мне</b> {<Field
                placeholder={'About me'}
                component={Textarea}
                name={'aboutMe'}
                validate={[]}/>}</div>

            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>В поиске работы</b> {
                <Field placeholder={''}
                       component={Input}
                       name={'lookingForAJob'}
                       validate={[]}
                       type={'checkbox'}/>}</div>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between'}}><b>О желаемой работе</b> {<Field placeholder={'Looking For A Job Description'}
                                        component={Textarea}
                                        name={'lookingForAJobDescription'}
                                        validate={[]}/>}</div>
        </div>

        <div style={{marginTop: '10px', width: '300px'}}>
            <h4>Контакты </h4>
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
            <div>{<Button ghost
                          type={'primary'}
                          onClick={saveHandler}
            >
                Сохранить
            </Button>}
            </div>
        </div>
    </form>
}

export const ProfileDataReduxForm = reduxForm<UserProfile, Props>({form: 'Contacts'})(ProfileDataForm)
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Button} from "antd";
import s from './add-new-post-form.module.css'
import {maxLengthCreator, required} from "../../utils/validators/login-form-validator";
import {MessageBody} from "../../pages/dialogs/dialogs";
import {Textarea} from "../../common/form-control/form-control";


const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm = (props: InjectedFormProps<MessageBody>) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.newPostForm}>
            <div>
                <Field
                    name={'newMessageBody'}
                    component={Textarea}
                    validate={[required, maxLength10]}
                    placeholder={'Новая запись'}
                />
            </div>
            <div>
                <Button ghost type={'primary'}>Добавить запись</Button>
            </div>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm<MessageBody>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

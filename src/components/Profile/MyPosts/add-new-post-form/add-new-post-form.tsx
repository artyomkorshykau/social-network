import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea1} from "../../../../common/form-control/form-control";
import {maxLengthCreator, required} from "../../../../utils/validators/login-form-validator";
import React from "react";
import {Button} from "antd";
import s from './add-new-post-form.module.css'
import {MessageBody} from "../../../../pages/dialogs/dialogs";


const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm = (props: InjectedFormProps<MessageBody>) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.newPostForm}>
            <div>
                <Field
                    name={'newMessageBody'}
                    component={TextArea1}
                    validate={[required, maxLength10]}
                    placeholder={'post message'}
                />
            </div>
            <div>
                <Button ghost type={'primary'}>Add post</Button>
            </div>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm<MessageBody>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

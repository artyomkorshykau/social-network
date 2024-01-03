import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea1} from "../../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validator";
import React from "react";
import {MessageBody} from "../../../Dialogs/DialogsPage";
import {Button} from "antd";
import s from './AddNewPostForm.module.css'


const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm = (props: InjectedFormProps<MessageBody>) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.newPostForm}>
            <div>
                <Field
                    name={'newMessageBody'}
                    component={TextArea1}
                    validate={[required, maxLength10]}
                    placeholder={'Post message'}
                />
            </div>
            <div>
                <Button ghost type={'primary'}>Add post</Button>
            </div>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm<MessageBody>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

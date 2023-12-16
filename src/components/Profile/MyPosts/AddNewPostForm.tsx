import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import React from "react";

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm = (props: InjectedFormProps<{ newPostElement: string }>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostElement'}
                    component={TextArea}
                    validate={[required, maxLength10]}
                    placeholder={'Post message'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm<{
    newPostElement: string
}>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

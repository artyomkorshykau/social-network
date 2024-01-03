import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea1} from "../../../common/FormControls/FormControls";
import React from "react";
import {MessageBody} from "../DialogsPage";

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props: InjectedFormProps<MessageBody>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea1}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<MessageBody>({form: 'dialogsAddMessageForm'})(AddMessageForm)
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validator";


const maxLength10 = maxLengthCreator(10)

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       component={Input}
                       name={'login'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field name={'remember'}
                       type={'checkbox'}
                       component={Input}
                /> Remember me
            </div>
            <div>
                <button>Sign up</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login
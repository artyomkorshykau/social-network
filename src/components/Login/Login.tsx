import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validator";
import {connect} from "react-redux";
import {LoginTC, LogoutTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import s from '../../common/FormControls/FormControl.module.css'


const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       component={Input}
                       name={'email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={Input}
                /> Remember me
            </div>
            {props.error && <span className={s.formSummaryError}>{props.error}</span>}
            <div>
                <button>Sign up</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        props.LoginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginTC, LogoutTC})(Login)
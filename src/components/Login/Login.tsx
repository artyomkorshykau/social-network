import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import s from '../../common/FormControls/FormControl.module.css'
import {LoginTC, LogoutTC} from "../../redux/thunks/thunks";


const LoginForm = ({handleSubmit, error, captcha}: any) => {
    return (
        <form onSubmit={handleSubmit}>
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

            {captcha && <img src={captcha} alt={'captcha'}/>}
            {captcha && <Field placeholder={'Antibot symbols'}
                               component={Input}
                               name={'captcha'}
                               validate={[required]}/>}

            {error && <span className={s.formSummaryError}>{error}</span>}
            <div>
                <button>Sign up</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<DataFormType, LoginFormProps>({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        props.LoginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapToStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

type MapToStatePropsType = {
    isAuth: boolean
    captcha: string | null
}

export type DataFormType = {
    login: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null
}

type LoginFormProps = {
    captcha: string | null
}
export default connect(mapStateToProps, {LoginTC})(Login)
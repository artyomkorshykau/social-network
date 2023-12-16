import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppState} from "../../redux/store";
import {LoginTC} from "../../redux/thunks/thunks";
import {LoginReduxForm} from "./LoginForm";


const Login = (props: Props) => {

    const onSubmit = (formData: any) => {
        console.log(formData)
        props.LoginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captcha}/>
    </div>
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

type MapStateToProps = {
    isAuth: boolean
    captcha: string | null
}

type MapDispatchToProps = {
    LoginTC: (log: string, pass: string, remember: boolean, captcha: string | null) => void
}

type Props = MapDispatchToProps & MapStateToProps

export type DataForm = {
    login: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null
}


export default connect<MapStateToProps, MapDispatchToProps, unknown, AppState>(mapStateToProps, {LoginTC})(Login)
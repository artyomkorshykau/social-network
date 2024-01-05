import React from 'react'
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "./login-form";
import {useDispatch, useSelector} from "react-redux";
import {thunks} from "../../redux/thunks/thunks";
import {getCaptchaUrl, getIsAuth} from "../../utils/selectors/auth-selectors/auth-selectors";

export const Login = () => {

    const captcha = useSelector(getCaptchaUrl)
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: DataForm) => {
        dispatch(thunks.login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captcha}/>
    </div>
}

export type DataForm = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null
}
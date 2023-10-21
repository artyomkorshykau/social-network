import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";


const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth

})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsForRedirectType) {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

//--------------------------------TYPES--------------------------------
type MapStateToPropsForRedirectType = {
    isAuth: boolean | null
}

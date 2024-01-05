import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppState} from "../redux/store/store";


const mapStateToProps = (state: AppState): MapStateToProps => ({
    isAuth: state.auth.isAuth

})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToProps) {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as unknown as T}/>
    }

    return connect<MapStateToProps, {}, T, AppState>(mapStateToProps)(RedirectComponent)
}

//--------------------------------TYPES--------------------------------
type MapStateToProps = {
    isAuth: boolean | null
}

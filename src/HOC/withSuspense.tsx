import React, {ComponentType} from "react";
import {Preloader} from "../common/Preloader/Preloader";

export function withSuspense<T>(Component: ComponentType<T>) {

    return (props: {}) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props as T}/>
        </React.Suspense>
    }
}
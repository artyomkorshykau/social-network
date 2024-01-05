import React, {ComponentType} from "react";
import {Preloader} from "../common/preloader/preloader";

export function withSuspense<T>(Component: ComponentType<T>) {

    return (props: T) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}
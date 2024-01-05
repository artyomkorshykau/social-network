import React, {useEffect} from 'react';
import {Alert, Layout} from 'antd';
import {useAppSuspendedData} from "../utils/hooks/useAppData";
import {thunks} from "../redux/thunks/thunks";
import {Preloader} from "../common/preloader/preloader";
import {useDispatch} from "react-redux";
import {Header} from "./header/header";
import {AppContent} from "./content/content";
import {Footer} from "./footer/footer";

const App = () => {

    const {isInitialized} = useAppSuspendedData()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunks.initialized());
        window.addEventListener('unhandledrejection', catchAllHandleErrors);

        return () => {
            window.removeEventListener('unhandledrejection', catchAllHandleErrors);
        };
    }, [dispatch]);
    const catchAllHandleErrors = (e: PromiseRejectionEvent) => {
        <Alert message="Some error occurred, check console" type="error"/>;
        console.error(e);
    };

    if (!isInitialized) {
        return <Preloader/>;
    }

    return (
        <Layout>
            <Header/>
            <AppContent/>
            <Footer/>
        </Layout>
    );
};

export default App;
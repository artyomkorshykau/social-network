import React from 'react'
import {useSelector} from "react-redux";
import Users from "./Users";
import {Preloader} from "../../common/Preloader/Preloader"
import {getIsFetching} from "../../utils/selectors/userSelectors";

const UsersPage = () => {

    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}

export default UsersPage


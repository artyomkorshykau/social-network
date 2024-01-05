import React from "react";
import {withSuspense} from "../../hoc/withSuspense";
import {useSelector} from "react-redux";
import {getIsInitialized} from "../selectors/app-selectors/app-selectors";

export const useAppSuspendedData = () => {
    const Dialogs = React.lazy(() => import('../../pages/dialogs/dialogs'))
    const Profile = React.lazy(() => import('../../pages/profile/profile'))
    const Users = React.lazy(() => import('../../pages/users/users'))
    const Chat = React.lazy(() => import('../../pages/chat/chat'))

    const isInitialized = useSelector(getIsInitialized);

    const SuspendedProfile = withSuspense(Profile)
    const SuspendedDialogs = withSuspense(Dialogs)
    const SuspendedUsers = withSuspense(Users)
    const SuspendedChat = withSuspense(Chat)

    return {
        SuspendedProfile, SuspendedDialogs, SuspendedUsers, SuspendedChat, isInitialized
    }
}
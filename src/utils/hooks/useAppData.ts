import React from "react";
import {withSuspense} from "../../hoc/withSuspense";
import {useSelector} from "react-redux";
import {getIsInitialized} from "../selectors/userSelectors";

export const useAppSuspendedData = () => {
    const Dialogs = React.lazy(() => import('../../pages/dialogs/dialogs'))
    const Profile = React.lazy(() => import('../../pages/profile/profile'))
    const Users = React.lazy(() => import('../../pages/users/users'))
    const Chat = React.lazy(() => import('../../pages/chat/chat'))

    const isInitialized = useSelector(getIsInitialized);

    const ProfilePage = withSuspense(Profile)
    const DialogsPage = withSuspense(Dialogs)
    const UsersPage = withSuspense(Users)
    const ChatPage = withSuspense(Chat)

    return {
        ProfilePage, DialogsPage, UsersPage, ChatPage, isInitialized
    }
}
import React from "react";
import {withSuspense} from "../../hoc/withSuspense";
import {useSelector} from "react-redux";
import {getIsInitialized} from "../selectors/userSelectors";

export const useAppSuspendedData = () => {
    const Dialogs = React.lazy(() => import('../../components/Dialogs/DialogsPage'))
    const Profile = React.lazy(() => import('../../components/Profile/ProfilePage'))
    const Users = React.lazy(() => import('../../components/Users/UsersPage'))
    const Chat = React.lazy(() => import('../../pages/ChatPage/ChatPage'))

    const isInitialized = useSelector(getIsInitialized);

    const ProfilePage = withSuspense(Profile)
    const DialogsPage = withSuspense(Dialogs)
    const UsersPage = withSuspense(Users)
    const ChatPage = withSuspense(Chat)

    return {
        ProfilePage, DialogsPage, UsersPage, ChatPage, isInitialized
    }
}
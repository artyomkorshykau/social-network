import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../selectors/profile-selectors/profile-selectors";
import {getIsAuth, getLoggedUser} from "../selectors/auth-selectors/auth-selectors";

export const useProfileData = () => {
    const profile = useSelector(getProfile)
    const status = useSelector(getStatus)
    const dispatch = useDispatch()
    const loggedUser = useSelector(getLoggedUser);
    const isAuth = useSelector(getIsAuth);

    return {
        profile,
        status,
        dispatch,
        loggedUser,
        isAuth
    }
}
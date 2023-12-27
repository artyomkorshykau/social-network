import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLoggedUser, getProfile, getStatus} from "../selectors/userSelectors";

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
import {getIsAuth, getUserLogin} from "../selectors/userSelectors";
import {useDispatch, useSelector} from "react-redux";
import {thunks} from "../../redux/thunks/thunks";

export const useHeaderData = () => {
    const login = useSelector(getUserLogin)
    const isAuth = useSelector(getIsAuth)
    const logout = thunks.logout()
    const dispatch = useDispatch()

    return {
        login,
        isAuth,
        logout,
        dispatch
    }
}
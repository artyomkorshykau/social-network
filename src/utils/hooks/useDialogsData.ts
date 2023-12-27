import {useSelector} from "react-redux";
import {getDialogsPage} from "../selectors/userSelectors";

export const useDialogsData = () => {
    const dialogsPage = useSelector(getDialogsPage)

    return {
        dialogsPage,
    }
}
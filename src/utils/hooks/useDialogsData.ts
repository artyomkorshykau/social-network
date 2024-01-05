import {useSelector} from "react-redux";
import {getDialogsPage} from "../selectors/dialogs-selectors/dialogs-selectors";

export const useDialogsData = () => {
    const dialogsPage = useSelector(getDialogsPage)

    return {
        dialogsPage,
    }
}
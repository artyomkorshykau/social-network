import {AddMessageForm} from "../AddMessageForm/AddMessageForm";
import {Messages} from "../Messages/Messages";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {thunks} from "../../../redux/thunks/thunks";
import {getSocketStatus} from "../../../utils/selectors/userSelectors";

export const Chat = () => {

    const dispatch = useDispatch()
    const status = useSelector(getSocketStatus)

    useEffect(() => {
        dispatch(thunks.messagesListening())
        return () => {
            dispatch(thunks.stopMessagesListening())
        }
    }, []);


    return <div>
        {status === 'error' && <div>Error! Please refresh the page.</div>}
        <Messages/>
        <AddMessageForm/>
    </div>
}
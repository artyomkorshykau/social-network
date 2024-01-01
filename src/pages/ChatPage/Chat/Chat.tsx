import {AddMessageForm} from "../AddMessageForm/AddMessageForm";
import {Messages} from "../Messages/Messages";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {thunks} from "../../../redux/thunks/thunks";

export const Chat = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunks.messagesListening())
        return () => {
            dispatch(thunks.stopMessagesListening())
        }
    }, []);


    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}
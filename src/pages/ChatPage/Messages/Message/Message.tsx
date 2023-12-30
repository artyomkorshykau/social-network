import {ChatMessage} from "../../ChatPage";

type Props = {
    message: ChatMessage
}
export const Message = ({message}: Props) => {

    return <div>
        <img src={message.photo} alt={'avatar'} width={'40px'}/><b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}
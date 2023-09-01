import React from "react"
import Dialogs from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import StoreContext from "../../../StoreContext";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer> {(store) => {

            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }

            let onNewMessageChange = (message: string) => {
                store.dispatch(updateNewMessageBodyAC(message))
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }}
        </StoreContext.Consumer>
    )
}


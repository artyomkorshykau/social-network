import React from "react"
import Dialogs from "../Dialogs";
import {ProfilePageType, sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateDialogsToProps = {
    dialogsPage: ProfilePageType
}
const mapStateToProps = (state: AppStateType): MapStateDialogsToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}
type MapDispatchDialogsToProps = {
    updateNewMessageBody: (message: string) => void;
    sendMessage: () => void
}
export type DialogsPropsType = MapDispatchDialogsToProps & MapStateDialogsToProps
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogsToProps => {
    return {
        updateNewMessageBody: (message: string) => {
            dispatch(updateNewMessageBodyAC(message))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
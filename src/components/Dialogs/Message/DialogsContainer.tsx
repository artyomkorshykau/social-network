import React from "react"
import {ProfilePageType, sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import Dialogs from "../Dialogs";

const mapStateToProps = (state: AppStateType): MapStateDialogsToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

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

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

//--------------------------------TYPES--------------------------------
type MapStateDialogsToProps = {
    dialogsPage: ProfilePageType
}

type MapDispatchDialogsToProps = {
    updateNewMessageBody: (message: string) => void;
    sendMessage: () => void
}

export type DialogsPropsType = MapDispatchDialogsToProps & MapStateDialogsToProps
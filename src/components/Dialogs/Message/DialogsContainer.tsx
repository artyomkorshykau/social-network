import React from "react"
import Dialogs from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (message: string) => {
            dispatch(updateNewMessageBodyAC(message))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
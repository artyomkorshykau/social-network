import React from "react"
import {AppStateType} from "../../redux/store";
import {sendMessageAC} from "../../redux/actions/actions";
import {compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {ProfilePageType} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {connect} from "react-redux";


const mapStateToProps = (state: AppStateType): MapStateDialogsToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogsToProps => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


//--------------------------------TYPES--------------------------------
type MapStateDialogsToProps = {
    dialogsPage: ProfilePageType
}

type MapDispatchDialogsToProps = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapDispatchDialogsToProps & MapStateDialogsToProps
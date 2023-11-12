import React from "react"
import {ProfilePageType, sendMessageAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import Dialogs from "../Dialogs";

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


// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

//--------------------------------TYPES--------------------------------
type MapStateDialogsToProps = {
    dialogsPage: ProfilePageType
}

type MapDispatchDialogsToProps = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapDispatchDialogsToProps & MapStateDialogsToProps
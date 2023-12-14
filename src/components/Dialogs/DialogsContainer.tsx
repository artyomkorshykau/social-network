import React from "react"
import {AppState} from "../../redux/store";
import {sendMessageAC} from "../../redux/actions/actions";
import {compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {ProfilePage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";


const mapStateToProps = (state: AppState): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToProps, MapDispatchToProps, unknown, AppState>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


//--------------------------------TYPES--------------------------------
type MapStateToProps = {
    dialogsPage: ProfilePage
}

type MapDispatchToProps = {
    sendMessage: (newMessageBody: string) => void
}

export type Props = MapDispatchToProps & MapStateToProps
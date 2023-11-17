import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfileTC, getUserStatusTC, updateStatusTC} from "../../redux/thunks/thunks";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId

        if (!userID) {
            userID = !userID ? "29875" : String(this.props.loggedUser)
            if (!userID) {
                this.props.history.push('/login')
            }
        }

        this.props.getProfileTC(userID)
        this.props.getUserStatusTC(userID)
    }

    render() {

        return (<div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}/>
        </div>)
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUser: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileTC, getUserStatusTC, updateStatusTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


//--------------------------------TYPES--------------------------------
export type ProfileUserType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: {
        small: string
        large: string
    }
}
export type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PathParamsType = {
    userId: string
}
type MapStateToProps = {
    profile: ProfileUserType | null
    status: string
    loggedUser: string | null
    isAuth: boolean | null
}
type MapDispatchToProps = {
    getProfileTC: (userID: string) => void
    getUserStatusTC: (status: string) => void
    updateStatusTC: (status: string) => void
}
type ProfileClassType = MapStateToProps & MapDispatchToProps
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileClassType
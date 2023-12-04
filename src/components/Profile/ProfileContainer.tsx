import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfileTC, getUserStatusTC, savePhotoTC, saveProfileTC, updateStatusTC} from "../../redux/thunks/thunks";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {

        return (<div>
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}
                     savePhoto={this.props.savePhotoTC}
                     saveProfile={this.props.saveProfileTC}/>
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
    connect(mapStateToProps, {getProfileTC, getUserStatusTC, updateStatusTC, savePhotoTC, saveProfileTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


//--------------------------------TYPES--------------------------------
export type ProfileUserType = {
    aboutMe: string
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: ProfilePhoto
}

export type ProfileDataForm = Omit<ProfileUserType, 'userId' | 'photos'>

export type ProfilePhoto = {
    small: string | null
    large: string | null
}

export type ProfileContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type PathParamsType = {
    userId: string
}
type MapStateToProps = {
    profile: ProfileUserType | null
    status: string
    loggedUser: number | null
    isAuth: boolean
}
type MapDispatchToProps = {
    getProfileTC: (userID: string) => void
    getUserStatusTC: (status: string) => void
    updateStatusTC: (status: string) => void
    savePhotoTC: (file: File) => void
    saveProfileTC: (profile: ProfileDataForm) => Promise<void>
}
type ProfileClassType = MapStateToProps & MapDispatchToProps
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileClassType
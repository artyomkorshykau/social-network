import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppState} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {UserProfile} from "../../api/types/typesApi";
import {thunks} from "../../redux/thunks/thunks";


class ProfileContainer extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    refreshProfile() {
        let userID = this.props.match.params.userId

        if (!userID) {
            userID = !userID ? "29875" : String(this.props.loggedUser)
            if (!userID) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Props, prevState: Props) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (<div>
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        </div>)
    }
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUser: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfile: thunks.getProfile,
        getUserStatus: thunks.getUserStatus,
        updateStatus: thunks.updateStatus,
        savePhoto: thunks.savePhoto,
        saveProfile: thunks.saveProfile
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


//--------------------------------TYPES--------------------------------


export type ProfileDataForm = Omit<UserProfile, 'userId' | 'photos'>

export type ProfilePhoto = {
    small: string | null
    large: string | null
}

export type ProfileContacts = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type PathParams = {
    userId: string
}
type MapStateToProps = {
    profile: UserProfile | null
    status: string
    loggedUser: number | null
    isAuth: boolean
}
type MapDispatchToProps = {
    getProfile: (userID: string | null) => void
    getUserStatus: (status: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileDataForm) => Promise<void>
}
type ProfileClass = MapStateToProps & MapDispatchToProps
type Props = RouteComponentProps<PathParams> & ProfileClass
import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = '29875'
        }

        this.props.getProfileTC(userID)
    }

    render() {

        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
})

export let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfileTC})(withUrlDataContainerComponent);

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
}
type MapDispatchToProps = {
    getProfileTC: (userID: string) => void
}
type ProfileClassType = MapStateToProps & MapDispatchToProps
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileClassType
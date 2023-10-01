import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = '2'
        }

        usersAPI.getProfile(userID)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);

//types
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
    setUserProfile: (profile: ProfileUserType) => void
}
type ProfileClassType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfileClassType
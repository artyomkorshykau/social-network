import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

export type ProfileUserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
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

class ProfileContainer extends React.Component<ProfileClassType> {

    componentDidMount() {

        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 2
        }

        const settings = {
            withCredentials: true,
            headers: {
                'API-KEY': 'd97e2ed5-672f-4df7-ab8f-20c419d5b616'
            }
        }

        axios.get<ProfileUserType>(`https://social-network.samuraijs.com/api/1.0/profile/2` + userID, settings)
            .then(res => {
                this.props.(res.data)
            })
    }

    render() {
        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }
}

type MapStateToProps = {
    profile: ProfileUserType
}

type MapDispatchToProps = {
    setUserProfile: (profile: ProfileUserType) => void
}

type ProfileClassType = MapStateToProps | MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
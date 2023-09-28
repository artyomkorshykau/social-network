import Header from "./Header";
import axios from "axios";
import {ProfileUserType} from "../Profile/ProfileContainer";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {

        const settings = {
            withCredentials: true
        }

        axios.get<ProfileUserType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, settings)
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            }
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
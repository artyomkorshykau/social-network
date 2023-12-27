import {Post} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppState} from "../../../redux/store";
import {Dispatch} from "redux";
import {actions} from "../../../redux/actions/actions";

const mapStateToProps = (state: AppState): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPostElement: string) => {
            dispatch(actions.addPost(newPostElement))
        }
    }
}

export const MyPostContainer = connect<MapStateToProps, MapDispatchToProps, unknown, AppState>(mapStateToProps, mapDispatchToProps)(MyPost)


//--------------------------------TYPES--------------------------------
type MapStateToProps = {
    posts: Post[]
}
type MapDispatchToProps = {
    addPost: (newPostElement: string) => void
}
export type Props = MapStateToProps & MapDispatchToProps

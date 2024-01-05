import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../selectors/profile-selectors/profile-selectors";

export const useMyPostsData = () => {
    const posts = useSelector(getPosts)
    const dispatch = useDispatch()

    return {
        posts,
        dispatch
    }
}
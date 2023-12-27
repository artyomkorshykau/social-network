import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../selectors/userSelectors";

export const useMyPostsData = () => {
    const posts = useSelector(getPosts)
    const dispatch = useDispatch()

    return {
        posts,
        dispatch
    }
}
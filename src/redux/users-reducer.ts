import {
    follow,
    setPage,
    setTotalUserCount,
    setUser,
    toggleIsFetching,
    toggleIsFollowing,
    unfollow
} from "./actions/actions";
import {ACTION_TYPE} from "../common/enums/Actions";
import {UserType} from "../api/types/typesApi";

let initialState: InitialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
}

const usersReducer = (state: InitialState = initialState, action: UserActions): InitialState => {
    switch (action.type) {
        case ACTION_TYPE.FOLLOW :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)
            }
        case ACTION_TYPE.UNFOLLOW :
            return {
                ...state,
                users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)
            }
        case ACTION_TYPE.SET_USER:
            return {...state, users: action.user}
        case ACTION_TYPE.SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case ACTION_TYPE.SET_TOTAL_USER_COUNT :
            return {...state, totalUserCount: action.totalCount}
        case ACTION_TYPE.IS_FETCHING:
            return {...state, isFetching: action.fetching}
        case ACTION_TYPE.IS_FOLLOWING: {
            return <InitialState>{
                ...state, isFollowing: action.fetching
                    ? [...state.isFollowing, action.id]
                    : state.isFollowing.filter(id => id != action.id)
            }
        }
        default :
            return state
    }
}
export default usersReducer


//------------------------------TYPES------------------------------
export type UserActions =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowing>

type InitialState = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean,
    isFollowing: []
}
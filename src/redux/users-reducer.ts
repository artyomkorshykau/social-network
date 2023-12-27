import {ACTION_TYPE} from "../common/enums/Actions";
import {UserType} from "../api/types/typesApi";
import {actions} from "./actions/actions";

let initialState: InitialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: true,
    isFollowing: [],
    filter: {
        term: '',
        friend: null as null | boolean
    }
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
        case ACTION_TYPE.USER_FILTER :
            return {...state, filter: action.payload}

        default :
            return state
    }
}
export default usersReducer


//------------------------------TYPES------------------------------
export type UserActions =
    | ReturnType<typeof actions.follow>
    | ReturnType<typeof actions.unfollow>
    | ReturnType<typeof actions.setUser>
    | ReturnType<typeof actions.setPage>
    | ReturnType<typeof actions.setTotalUserCount>
    | ReturnType<typeof actions.toggleIsFetching>
    | ReturnType<typeof actions.toggleIsFollowing>
    | ReturnType<typeof actions.setUserFilter>

export type InitialState = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean,
    isFollowing: [],
    filter: { term: string, friend: null | boolean }
}

export type Filter = typeof initialState.filter
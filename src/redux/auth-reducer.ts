import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: true
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}
export default authReducer

//-------------------------------ACTION CREATORS TYPES-------------------------------
const SET_USER_DATA = 'SET_USER_DATA'

//-------------------------------ACTION CREATORS-------------------------------
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null) =>
    ({type: SET_USER_DATA, data: {userId, login, email}})

//-------------------------------THUNK CREATORS-------------------------------
export const authMeTC = () => {
    return (dispatch: Dispatch) => {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}

//-------------------------------TYPES-------------------------------
type InitialStateType = {
    id: null | string;
    email: null | string,
    login: null | string,
    isFetching: boolean
    isAuth: boolean | null
}
type ActionType = ReturnType<typeof setAuthUserData>

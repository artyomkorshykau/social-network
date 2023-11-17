import {setAuthUserData} from "./actions/actions";

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default authReducer

//-------------------------------TYPES-------------------------------
type InitialStateType = {
    id: null | string;
    email: null | string,
    login: null | string,
    isFetching: boolean
    isAuth: boolean | null
}
export type AuthActionType = ReturnType<typeof setAuthUserData>

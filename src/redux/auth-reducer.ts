const SET_USER_DATA = 'SET_USER_DATA'

type InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: boolean
    isAuth: boolean
}
type ActionType = ReturnType<typeof setAuthUserData>

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state: InitialStateType, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
})

export default authReducer
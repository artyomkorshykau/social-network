import {AppDispatchType, AppThunk} from "./store";
import {authMeTC} from "./auth-reducer";
import {Dispatch} from "redux";

const initialState = {
    initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: InitializedActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {...state, initialized: true}
        default:
            return state
    }
}

//-------------------------------ACTION CREATORS-------------------------------
export const initializedSucceed = () => ({type: 'SET_INITIALIZED'})

//-------------------------------THUNK CREATORS-------------------------------
export const initializedTC = (): AppThunk => {
    return async (dispatch) => {
        const res = dispatch(authMeTC())
        Promise.all([res])
            .then(() => {
                dispatch(initializedSucceed())
            })
    };
};

export default appReducer


type InitialStateType = typeof initialState
export type InitializedActionType = ReturnType<typeof initializedSucceed>
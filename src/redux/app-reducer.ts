import {initializedSucceed} from "./actions/actions";

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


export default appReducer

//---------------------------------TYPES---------------------------------

type InitialStateType = typeof initialState
export type InitializedActionType = ReturnType<typeof initializedSucceed>
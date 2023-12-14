import {initializedSucceed} from "./actions/actions";
import {ACTION_TYPE} from "../common/enums/Actions";

const initialState = {
    initialized: false
}

const appReducer = (state: InitialState = initialState, action: InitializedAction): InitialState => {
    switch (action.type) {
        case ACTION_TYPE.SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}


export default appReducer

//---------------------------------TYPES---------------------------------

type InitialState = typeof initialState
export type InitializedAction = ReturnType<typeof initializedSucceed>
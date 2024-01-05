import {ACTION_TYPE} from "../../common/enums/actions";
import {actions} from "../actions/actions";

const initialState = {
    initialized: true
}

const appReducer = (state: InitialState = initialState, action: AppActions): InitialState => {
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
export type AppActions = ReturnType<typeof actions.initializedSucceed>
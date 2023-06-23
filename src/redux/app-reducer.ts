import { actionTypes, thunkType } from "../action-types.ts"
import { authtorize } from "./auth-reducer.ts"

const SET_INIT = "SET-USER-DATA"

export namespace appTypes {
    export type setInitializedActionType = { type: typeof SET_INIT }
}
const setInitialized = (): appTypes.setInitializedActionType => ({ type: SET_INIT })
type initialStateType = {
    initialized: boolean
}
let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: actionTypes<appTypes.setInitializedActionType>): initialStateType => {
    switch (action.type) {
        case SET_INIT: {
            return { ...state, initialized: true }
        }
        default: return state;
    }
}
//@ts-ignore
const initialize = (): thunkType => (dispatch) => {
    let promise = dispatch(authtorize())
    promise.then(() => {
        dispatch(setInitialized())
    })
}

export { initialize, appReducer }
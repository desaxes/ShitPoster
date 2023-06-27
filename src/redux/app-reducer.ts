import { thunkType } from "../action-types.ts"
import { authtorize } from "./auth-reducer.ts"
import { InferActionsTypes } from "./redux-store.ts"
// ===========================================ACTIONS======================================================
const actions = {
    setInitialized: () => ({ type: 'SET_INIT' })
}
export type AppActionTypes = InferActionsTypes<typeof actions>


let initialState = {
    initialized: false
}

type initialStateType = typeof initialState

const appReducer = (state = initialState, action: AppActionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_INIT': {
            return { ...state, initialized: true }
        }
        default: return state;
    }
}
//@ts-ignore
const initialize = (): thunkType => (dispatch) => {
    let promise = dispatch(authtorize())
    promise.then(() => {
        dispatch(actions.setInitialized())
    })
}

export { initialize, appReducer }